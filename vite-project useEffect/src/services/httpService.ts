//creating generic service for all the http requests

import apiClient from "./apiClient";

//exporting because user is needed in the app component

export interface Users {
    name: string;
    id: number;
  }

class HTTPService {

    endpoint:string;

    constructor(endpoint:string){
        this.endpoint=endpoint;
    }
//T is the generic type
    getAll<T>(){

        const controller = new AbortController();
        const request= apiClient.get<T[]>(this.endpoint, {
        signal: controller.signal,
      })
      //request contains the promise
         return {request,cancel:()=>controller.abort()};
    }

    delete<T extends Users>(entity:T){
        const request=apiClient.delete(this.endpoint+"/"+entity.id);
        return {request};
    }

    add<T>(newEntity:T){
        
        const request= apiClient.post(this.endpoint, newEntity);
        return {request};
    }

    modify<T extends Users>(modEntity:T){
        
        const request= apiClient.patch(this.endpoint+"/" + modEntity.id, modEntity )
        return {request};
    }
}
//we dont want to hard code the endpoint
//because with this out http service will no longer be reusable
// export default new HTTPService('/users');

const create=(endpoint:string)=> new HTTPService(endpoint);

export default create;
//extracting the user service

import apiClient from "./apiClient";

//exporting because user is needed in the app component
export interface Users {
    name: string;
    id: number;
  }

class userService {

    getAllUsers(){

        const controller = new AbortController();
        const request= apiClient.get<Users[]>("/users", {
        signal: controller.signal,
      })
         return {request,cancel:()=>controller.abort()};
    }
}

export default new userService();
//constructor will be called only once when the module will be first 
//imported and the instance will be shared across all instance

/*Importing the module will create and share a single instance of userService.
The constructor of userService will be called once when the module is first imported.
No HTTP requests will be made until you call the getAllUsers method or any other method on the userService instance. */
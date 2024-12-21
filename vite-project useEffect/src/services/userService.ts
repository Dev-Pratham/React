//extracting the user service
//checkout userService2 first
import create from "./httpService"

//exporting because user is needed in the app component

export interface Users {
    name: string;
    id: number;
  }



export default create('/users');
//constructor will be called only once when the module will be first 
//imported and the instance will be shared across all instance

/*Importing the module will create and share a single instance of userService.
The constructor of userService will be called once when the module is first imported.
No HTTP requests will be made until you call the getAllUsers method or any other method on the userService instance.*/
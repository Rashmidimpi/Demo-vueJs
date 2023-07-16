import axios from "axios";

export class UserService{
    static users = [];

      static getAllUsers(){
          let dataUrl = 'https://jsonplaceholder.typicode.com/users';
        return axios.get(dataUrl);
      }

      static getUser(userId){
          let dataUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
          return axios.get(dataUrl);
      }

      static addUser(data){
      return axios.post('https://jsonplaceholder.typicode.com/users',data);
    }

    static deleteUser(userId){
      let dataUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
      return axios.delete(dataUrl);
  }

}
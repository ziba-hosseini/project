import axios from 'axios';

export const BaseUrl="http://localhost:3000/";
const  get=(url:string):Promise<String>=>{
    return axios.request({
      url:`${BaseUrl+url}`,
    });
  }

export const Api={
    get
}
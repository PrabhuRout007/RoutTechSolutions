import axios from "axios";

class PostServices{
   static getPostServices = ()=>{
    let post_data = "https://jsonplaceholder.typicode.com/posts";
    return axios.get(post_data)
   }
}

export default PostServices;
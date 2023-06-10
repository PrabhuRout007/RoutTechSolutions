import axios from "axios";

class UserServices {
    static getUserPost = ()=>{
        let user_post = "https://jsonplaceholder.typicode.com/users";
        return axios.get(user_post);
    }
}
export default UserServices;
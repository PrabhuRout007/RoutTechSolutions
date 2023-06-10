import axios from "axios";

class PhotoServices {
    static getPhotoServices = ()=>{
        let user_photo = "https://jsonplaceholder.typicode.com/photos";
        return axios.get(user_photo);
    }
}
export default PhotoServices;

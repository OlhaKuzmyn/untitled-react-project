import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postsService = {
    getAll: ()=> axiosService.get(urls.posts),
    getByUserId: (userId)=> axiosService.get(`${urls.users}/${userId}${urls.posts}`)
}

export {postsService}
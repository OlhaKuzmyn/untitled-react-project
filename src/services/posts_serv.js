import {constants} from "../const/const";

export const postsService = {
    allPosts: () => fetch(constants.urlData + 'posts')
        .then(value => value.json())
}
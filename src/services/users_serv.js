import {constants} from "../const/const";

export const usersService = {
    allUsers: () => fetch(constants.urlData + 'users')
        .then(value => value.json())
}

//export const commentsService = {
//   getAllComments: () => fetch(constants.apiUrl + 'comments').then(value => value.json())
// }
import {constants} from "../const/const";

export const commentsService = {
    allComments: () => fetch(constants.urlData + 'comments')
        .then(value => value.json())
}
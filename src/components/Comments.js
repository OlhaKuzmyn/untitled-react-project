import {useState,useEffect} from "react";
import Comment from "./Comment";
import {commentsService} from "../services/comm_serv";
// import User from "./User";

// const Comments = ()=>{
//     const [comments,setComments] = useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/comments/')
//             .then(value => value.json())
//             .then(value => setComments(value))
//     },[])
//     return (
//         <div>
//             {comments.map(comment=><Comment key={comment.id} comment={comment} />)}
//         </div>
//     )
// }

const Comments = ()=>{
    const [comments,setComments]=useState([]);
    useEffect(()=>{
        commentsService.allComments().then(value => setComments(value))
    },[])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/> )}
        </div>
    )
}

export default Comments
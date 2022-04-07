import {useState,useEffect} from "react";
// import Post from "./Post";
import User from "./User";

const Comments = ()=>{
    const [comments,setComments] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments/')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])
    return (
        <div>
            {comments.map(comment=><User key={comment.id} user={comment} />)}
        </div>
    )
}


export default Comments
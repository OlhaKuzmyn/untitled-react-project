import {useState,useEffect} from "react";
// import Post from "./Post"
import User from "./User";

const Posts = () =>{
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])
    return (
        <div>
            {posts.map(post=><User key={post.id} user={post} />)}
        </div>
    )
}

export default Posts
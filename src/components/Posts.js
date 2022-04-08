import {useState,useEffect} from "react";
import Post from "./Post"
import {postsService} from "../services/posts_serv";
// import User from "./User";

// const Posts = () =>{
//     const [posts,setPosts] = useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts/')
//             .then(value => value.json())
//             .then(value => setPosts(value))
//     },[])
//     return (
//         <div>
//             {posts.map(post=><Post key={post.id} post={post} />)}
//         </div>
//     )
// }

const Posts = ()=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        postsService.allPosts().then(value => setPosts(value))
    },[])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/> )}
        </div>
    )
}

export default Posts
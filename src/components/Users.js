import {useState,useEffect} from "react";
import User from "./User";
import {usersService} from "../services/users_serv";

// const Users = ()=>{
//     const [users,setUsers] = useState([]);
//     useEffect(()=> {
//         fetch('https://jsonplaceholder.typicode.com/users/')
//             .then(value => value.json())
//             .then(value => setUsers(value))
//         },[])
//     return (
//         <div>
//             {users.map(user => <User key={user.id} user={user}/> )}
//         </div>
//     )
// }

const Users = ()=>{
    const [users,setUsers]=useState([]);  //resolve const [users, setUsers] = useState(null);
    useEffect(()=>{
        usersService.allUsers().then(value => setUsers(value))
    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/> )}  {/*resolve   users && users.map((user) => <User key={user.id} user={user}/>) */}
        </div>
    )
}

export default Users
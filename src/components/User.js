
// const User = ({user})=>{
//     const {id,name,username,email,title,body} = user;
//     console.log(user)
//     // for (const userKey in user) {
//     //     if (user[userKey] !==undefined){
//     //         return(
//     //             <div>
//     //                 {user[userKey]} <br/>
//     //             </div>
//     //         )
//     //     }
//     // }
//
//     return (
//         <div>
//             {id}  {name}  {username}  {email}  {title}  {body}
//         </div>
//     )
//
// }
const User = ({user})=>{
    const {id,name,username,email} = user;
    return (
        <div>
            {id} | {name} | {username} | {email}
        </div>
    )
}
export default User
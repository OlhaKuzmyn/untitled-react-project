
const Comment = ({comment})=>{
    const {id,name,body,email} = comment;
    return (
        <div>
            {id} | {name} | {body} | {email}
        </div>
    )
}
export default Comment
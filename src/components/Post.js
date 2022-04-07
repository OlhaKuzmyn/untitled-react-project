
const Post = ({post})=>{
    const {id,title,body} = post;
    return (
        <div>
            {id} | {title} | {body}
        </div>
    )
}
export default Post
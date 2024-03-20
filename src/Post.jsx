import './Post.css'
export default function Post({post}){
    // console.log(post)
    const {title, body,  id, userId} = post
    return (
        <div className='post'>
            <h5>Title: {title}</h5>
            <p><small>Details:- {body}</small></p>
            <h3><small>ID : {id}</small></h3>
            <h4><small>User ID: {userId}</small></h4>

        </div>
    )
}
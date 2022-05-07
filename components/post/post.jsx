

const PostComponent = ({title, name, content}) => {
    return(
    <div className="post-container">
        <h4 className="post-title">{title}</h4>
        {/* <hr/> */}
        <h5 className="post-writer-name">by {name}</h5>
        {/* <hr/> */}
        <div className="post-content">{content}</div>
    </div>
    )
}

export default PostComponent;
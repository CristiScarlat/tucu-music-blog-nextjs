

const PostComponent = ({title, name, content, postDate}) => {
    return(
    <div className="post-container">
        <p style={{opacity: 0.5}}>{postDate || ''}</p>
        <h4 className="post-title">{title || ''}</h4>
        <h5 className="post-writer-name">{name || ''}</h5>
        <div className="post-content">{content || ''}</div>
    </div>
    )
}

export default PostComponent;
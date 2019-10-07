import React from 'react'
import './style.scss'


const BlogText = ({ title, description, author, images }) => {
    
    return (
        <>
        <div className="blogText">
            <h2 className="titleBlog">{title}</h2>
            <img src={images} alt={title} />
            <p className="description">{description}</p>
            <p className="author"><strong>{author}</strong></p>
        </div> 
        </>
    )
}

export default BlogText
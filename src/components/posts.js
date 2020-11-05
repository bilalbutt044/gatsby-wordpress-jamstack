import React from "react"
const Posts = ({ post }) => {
  return (
    <div>
      <img src={post?.featuredImage?.node?.sourceUrl} />
      <h2>{post.title}</h2>
      <p>
        Posted on {post.date} by {post.author.node.name}
      </p>
    </div>
  )
}

export default Posts

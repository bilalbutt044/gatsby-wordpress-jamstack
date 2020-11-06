import { Link } from "gatsby"
import React from "react"
const Posts = ({ post }) => {
  return (
    <div>
      <Link to={post.slug}>
        <img src={post?.featuredImage?.node?.sourceUrl} />
        <h2>{post.title}</h2>
        <p>
          Posted on {post.date} by {post.author.node.name}
        </p>
      </Link>
    </div>
  )
}

export default Posts

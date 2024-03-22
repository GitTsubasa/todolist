import React from "react";

const PostContainer = ({ post, setPost }) => {
  const deletePost = (index) => {
    const refresh = post.filter((_, i) =>i !== index)
    setPost(refresh);
  }

  return (
    <div>
      {post.map((ele, index) => (
        <div key={index}>
          {ele}
          <button onClick={() => deletePost(index)}>x</button>
        </div>
      ))
      }
    </div>
  )
}

export default PostContainer;
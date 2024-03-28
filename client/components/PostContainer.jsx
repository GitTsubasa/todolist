import React from "react";

const PostContainer = ({ post, deletePost }) => {

  return (
    <div>
      {post.map((ele) => (
        <div key={ele.id}>
          {ele.task}
          <button onClick={() => deletePost(ele.id)}>x</button>
        </div>
      ))
      }
    </div>
  )
}

export default PostContainer;
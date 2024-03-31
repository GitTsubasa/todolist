import React from "react";
import DeleteButton from "./buttons/DeleteButton";

const PostContainer = ({ ele, posts, setPosts }) => {
  return (
    <li key={ele.id}>
      {ele.id}
      {ele.task}
      <DeleteButton posts={posts} setPosts={setPosts} ele={ele}/>
    </li>
  )
}
export default PostContainer;
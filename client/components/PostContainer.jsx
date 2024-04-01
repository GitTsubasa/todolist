import React from "react";
import Button from "./Button";

const PostContainer = ({ label, deletePost }) => {
  return (
    <li>
      {label}
      <Button label="x" onClick={deletePost}/>
    </li>
  )
}
export default PostContainer;
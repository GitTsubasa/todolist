import React, {useState}  from "react";
import PostContainer from './PostContainer';

const MainContainer = () => {
  const [post, setPost] = useState([]);
  const display = () => {
    const newPost = document.getElementById('textbox').value;
    setPost([...post, newPost]);
  }

  return (
    <div>
      <input type='text'id='textbox'></input>
      <button onClick={display}>Submit</button>
      <PostContainer post={post} setPost={setPost} />
    </div>
  )
}

export default MainContainer;
import React, {useEffect, useState}  from "react";
import PostContainer from './PostContainer';

const MainContainer = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ("http://localhost:5000");
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
  })

  const submit = async () => {
    const newPost = document.getElementById('textbox').value;
    const postRequest = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({task: newPost})
    };
    try {
      const response = await fetch("http://localhost:5000", postRequest);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPost([...post, data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const deletePost = async (id) => {
    const deleteRequest = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    };
    try {
      const response = await fetch(`http://localhost:5000/${id}`, deleteRequest);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const refresh = post.filter((_, i) =>i !== id);
      setPost(refresh);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  return (
    <div>
      <input type='text'id='textbox'></input>
      <button onClick={submit}>Submit</button>
      <PostContainer post={post} setPost={setPost} deletePost={deletePost}/>
    </div>
  )
}

export default MainContainer;
import React, {useEffect, useState, useRef}  from "react";
import ListContainer from './ListContainer';
import Button from "./Button";

const MainContainer = () => {
  const [posts, setPosts] = useState([]);
  // uncontrolled element - doesn't keep track but just accesses in the input with ref.current.value
  // const ref = useRef(null);
  // controlled element - keeps track of information inside the state
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ("http://localhost:5000");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
    // this dependency causes useEffect to render once
  }, [])

  const submitPost = async () => {
    // const newposts = document.getElementById('textbox').value;
    // const newposts = ref.current.value
    const postsRequest = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({task: taskName})
    };
    try {
      const response = await fetch("http://localhost:5000", postsRequest);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setPosts([...posts, data]);
      setTaskName('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  return (
    <div>
      <input type='text'id='textbox' /*ref={ref}*/ value={taskName} onChange={(e)=>{setTaskName(e.target.value)}}></input>
      <Button label="Submit" onClick={submitPost}/>
      <ListContainer posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default MainContainer;
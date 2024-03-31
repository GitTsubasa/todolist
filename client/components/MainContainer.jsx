import React, {useEffect, useState, useRef}  from "react";
import ListContainer from './ListContainer';
import SubmitButton from "./buttons/SubmitButton";

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
        console.log('getrequest', response);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchData();
    // this dependency causes useEffect to render once
  }, [])

  return (
    <div>
      <input type='text'id='textbox' /*ref={ref}*/ value={taskName} onChange={(e)=>{setTaskName(e.target.value)}}></input>
      <SubmitButton posts={posts} setPosts={setPosts} taskName={taskName} setTaskName={setTaskName} />
      <ListContainer posts={posts} setPosts={setPosts}/>
    </div>
  )
}

export default MainContainer;
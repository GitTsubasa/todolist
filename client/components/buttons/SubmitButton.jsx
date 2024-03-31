import React from "react";

const SubmitButton = ({ posts, setPosts, taskName, setTaskName }) => {
  const submit = async () => {
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
    <button onClick={submit}>Submit</button>
  )
}

export default SubmitButton;
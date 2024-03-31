import React from "react";
import PostContainer from "./PostContainer";

const ListContainer = ({ posts, setPosts }) => {
  // const deletePost = async (id) => {
  //   const deleteRequest = {
  //     method: 'DELETE',
  //     headers: {'Content-Type': 'application/json'},
  //   };
  //   try {
  //     const response = await fetch(`http://localhost:5000/${id}`, deleteRequest);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const refresh = posts.filter(post => post.id !== id)
  //     setPosts(refresh);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  return (
    <ul>
      {posts.map((ele) => 
        // <li key={ele.id}>
        //   {ele.task}
        //   <button onClick={() => deletePost(ele.id)}>x</button>
        // </li>
        <PostContainer posts={posts} setPosts={setPosts} ele={ele}/> 
      )}
    </ul>
  )
}

export default ListContainer;
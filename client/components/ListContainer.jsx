import React from "react";

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
//     const refresh = posts.filter((_, i) =>i !== id);
//     setPosts(refresh);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
const ListContainer = ({ posts, setPosts }) => {
  // };
  return (
    <ul>
      {posts.map((ele, i) => {
        // console.log(ele, i, ele.id);
        return (
        <li key={ele.id + i}>
          {ele.task}
          {/* <button onClick={() => deletePost(ele.id)}>x</button> */}
        </li>
      )})
      }
    </ul>
  )
}

export default ListContainer;
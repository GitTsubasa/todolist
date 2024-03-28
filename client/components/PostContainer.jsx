import React from "react";

const PostContainer = ({ post, deletePost }) => {
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
  //     const refresh = post.filter((_, i) =>i !== id);
  //     setPost(refresh);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

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
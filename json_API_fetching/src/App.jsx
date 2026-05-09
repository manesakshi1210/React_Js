import React, {useState, useEffect} from 'react'
import './App.css'


function App() {

  const [post , setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [postId, setPostId] = useState('1')

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
     .then(response => response.json())
      .then(post => {
        setPost(post)
        console.log(post)
        setLoading(false)
      }
      )
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [ postId])





  return (
    <div>
      <h1>Json API Fetching</h1>
    <hr />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {post && (
        <div className='container'>
          
          <label>Enter Post Id: </label>
          <input className='idinput' type="text" value={postId} onChange={(e) => setPostId(e.target.value)} />
          <h4>Id: {post.id}</h4>
          <h3>Post Title :</h3>
          <p>{post.title}</p>
          <h3>Post Body : </h3>
          <p>{post.body}</p>
        </div>
      )}
      
    </div>
  )
}

export default App

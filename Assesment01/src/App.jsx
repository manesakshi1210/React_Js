// ## 🧪 Practical 1: Conditional Rendering

// 👉 Create a component:

// - Show **"Welcome User"** if logged in
// - Otherwise show **"Please Login"**


//  import React from 'react'
 
//  function App() {

    
//    const isLoggedIn = false; 
//    return (
//      <div>
//         {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
       
//      </div>
//    )
//  }
 
//  export default App
  // ------------------------------------------------------------------------- //

//  ## 🧪 Practical 2: useEffect Data Fetching

// 👉 Fetch data from:

// ```
// https://jsonplaceholder.typicode.com/posts
// ```

// - Show **loading**
// - Display **first 5 posts titles**


// import React from 'react'

// function App() {

//   const [posts, setPosts] = React.useState([]);
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(null);
  
//   React.useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then ((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setPosts(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       setError(err.message);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <div>
      
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {!loading && !error && (
//             <div>
//               <h2 style={{textAlign:'center' , backgroundColor:"grey"}}>Posts</h2>
//               <hr />
//               <ul>
//                 {posts.slice(0, 5).map((post) => (
//                   <li key={post.id}>Post .{post.id}:
//                   <p>{post.title}</p></li>

//                 ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App

// ------------------------------------------------------------------------- //

// ## 🧪 Practical 3: Custom Hook

// 👉 Create a custom hook:

// ```
// useFetch(url)
// ```

// - Returns: data, loading, error
// - Use it in a component 

import React from 'react'
import FetchComponent from './hooks/FetchComponent'

function App() {
   
  return (
    <div>
        <h1>Custom Hook: useFetch</h1>
        <hr />
        <FetchComponent />
    </div>
  )
}

export default App

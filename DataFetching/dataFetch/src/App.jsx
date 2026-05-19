import { useState , useEffect } from 'react';

export default function App() {

  //1.state
   const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data)=>
    {
      setUserData(data)
      setIsLoading(false)
    })
    .catch((err)=>{
      setError(err)
      setIsLoading(false)
    })
  },[])

  if(isLoading) return <h3>Loading PLease wait</h3>;
  if(error) return<h3>Something went wrong</h3>

  return (
    <div>
      <h1>Data Fetch - from https://jsonplaceholder.typicode.com/todos/1</h1>
       <h3>Id:{userData.id}</h3>
       <h3>Title:{userData.title}</h3>
       <hr />
       {/* <h4>  Task is completed: {userData.completed.toString()} </h4> */}
        <h4> Task is completed: {userData.completed ? "Completed" : "Not Completed"}</h4>
    </div>
  )
}

import React, {useState, useEffect}  from 'react'

function App() {

  //step 1: create state variables to store the data, loading status, and error
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  
  //step 2: use useEffect to fetch data when the component mounts
  useEffect(() => {
    //step 3: define an async function to fetch data
    fetch('https://api.github.com/users/manesakshi1210')
      .then(response => response.json())
      .then(data => {
        setUserData(data) //step 4: update state with fetched data
        setIsLoading(false) //step 5: set loading to false
      })
      .catch(err => {
        setError(err) //step 6: handle any errors
        setIsLoading(false) //step 7: set loading to false even if there's an error
      })
  }, [])


  return (
    <div>
      <h1>Data Fetching in React js</h1>
      <hr />
      {isLoading && <p>Loading...</p>} {/* step 8: show loading state */}
      {error && <p>Error: {error.message}</p>} {/* step 9: show error message if there's an error */}


      {userData && ( // step 10: display user data if it's available
        <div>
          <h2>Name: {userData.name}</h2>
          {/* <img src={userData.avatar_url} alt="User Avatar" width="100" /> */}
          
          <p>Bio: {userData.bio}</p>
          <p>Location :{userData.location}</p>
          <p>github ID: {userData.login}</p>
          <p>Gihub URL: <a>{userData.url}</a> </p>
          <p>followers :{userData.followers}</p>
        </div>
      )}
    </div>
  )
}

export default App

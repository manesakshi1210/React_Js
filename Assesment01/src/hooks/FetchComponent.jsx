import React from 'react'



const useFetch = (url) => {
        const [data, setData] = React.useState(null);
        const [loading, setLoading] = React.useState(true);
        const [error, setError] = React.useState(null);
        React.useEffect(() => {
            fetch(url)
            .then ((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
        }, [url]);
        return { data, loading, error };
        }

function FetchComponent() {

      

      const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
         <h2 style={{textAlign:'center'}}> Posts: </h2>
         
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {data && (
            <div>
                
                <ul>
                    {data.map((post) => (
                        <div>
                        <li key={post.id}>
                            <p>{post.id} post. <p>{post.title}</p></p>
                        </li>
                        <hr />
                        </div>
                    ))}
                    
                </ul>
            </div>
        )}


    </div>
  )
}

export default FetchComponent

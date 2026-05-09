// fetching data from an API

async function userData(userID) {
    const response = await fetch(`https://api.github.com/users/${userID}`);
    const finalresponse = await response.json();
    console.log(finalresponse);
}
 
userData("manesakshi1210");
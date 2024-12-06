async function  fetchData() {
    try{
        console.log("fetching user data...");

        let respond = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!respond.ok){
            throw new Error(`HTTP error! status: ${respond.status}`);
        }
        let user = await respond.json();
        console.log(user)

    }catch(error){
        console.error(error);
    }
    
}
fetchData()
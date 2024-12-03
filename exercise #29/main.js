async function fetData (){
    console.log("fetching user data..");

    let respond = await fetch('data.json');
    
    let data = await respond.json();
    console.log(data);
}
fetData();
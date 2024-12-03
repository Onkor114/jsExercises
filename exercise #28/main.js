function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let success = true;
            if(success){
                resolve("this message was successfully sent");
            }else {
                reject("this message failes to be sent");
            }
        }, 2000);
    })
}

async function displayMessage(){
    try {
        let user = await fetchUserData();
        console.log(user);
    } catch (err){
        console.log(err);
    }
}
    displayMessage();
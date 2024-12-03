function fetchUserData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let success = false;
            if(success){
                resolve("this message was successfully sent");
            }else {
                reject("this message failes to be sent");
            }
        }, 2000);
    })
}

fetchUserData()
    .then(message => console.log(message))
    .catch(error => console.log(error));
    
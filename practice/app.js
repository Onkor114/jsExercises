// // sychronous


// function fetchUserData(){
//     alert("fetching user data..");
//     return {id: 1, name: "ali"};
// }

// console.log("user data loaded")

// const user = fetchUserData() ;

// console.log("user data" , user);

// console.log("this message is now live");

// aysychronous

// function getUserData(callback){
//     setTimeout(()=>{
//         const user = {id: 2, name: "abdi"};
//         callback(user);
        
//     }, 3000)
// }
// console.log("user data shows")
// getUserData( function(user){
//     console.log(user);
// });




//////////////////  promises

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve({ id: 10, name: "john" });
//             } else {
//                 reject("failed to fetch user data");
//             }
//         }, 2000);
    
        
//     });
// }
// // console.log(fetchUserData())
// // fetchUserData()
// //     .then((data) => console.log("user dara", data))
// //     .catch((err) => console.log(err))

// async function displauUserData(){
//     try {
//         let user = await fetchUserData();
//         console.log(user);
//     } catch (err){
//         console.log(err);
//     }
// }
// displauUserData();


// async function fetchData() {
//     console.log ("fetching user data...");

//     let user = await fetch('data.json');
//     let userData = await user.json();
//     console.log(userData)

// }
// fetchData()

function operate( a,b,callback){
    return callback(a,b);
}

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b!=0){
        return a/b;
    }else {
        throw new Error("Cannot divide by zero");
    }
}

console.log("addition " + operate(2,3, add));
console.log("addition " + operate(6,3, subtract));
console.log("addition " + operate(2,3, multiply));
console.log("addition " + operate(4,2, divide));



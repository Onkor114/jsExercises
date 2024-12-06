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

// function operate( a,b,callback){
//     return callback(a,b);
// }

// function add(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     if(b!=0){
//         return a/b;
//     }else {
//         throw new Error("Cannot divide by zero");
//     }
// }

// console.log("addition " + operate(2,3, add));
// console.log("addition " + operate(6,3, subtract));
// console.log("addition " + operate(2,3, multiply));
// console.log("addition " + operate(4,2, divide));



//GET METHON
// async function fetchData() {
//     try {
//         console.log("starting fetching data ..");
//         let respond = await fetch('https://jsonplaceholder.typicode.com/posts');
        
//         if(!respond.ok){
//             throw new Error(`HTTP error! status: ${respond.status}`);
//         }
//         let data = await respond.json();
//             console.log(data);
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchData()

// async function postData() {
//     try {
//         console.log("starting posting data ..");
//         let respond = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 title: 'foo',
//                 body: 'bar',
//                 userId: 1
//             }),
//         });
        
//         if(!respond.ok){
//             throw new Error(`HTTP error! status: ${respond.status}`);
//         }
//         // before json
//         console.log("before json" , respond)
//         let data = await respond.json();
//         console.log("after json" , respond)
//             console.log(data);

//     }catch(error){
//         console.log(error)
//     }
// }
// postData()



///////////////////DOM MANIPULATION

const  header = document.querySelector('#header');
const textContent = document.querySelector('#paragraph');
const body = document.querySelector('body')

function changeContent() {
    header.textContent = "new content";
    header.style.fontSize = "19px";
    header.style.color = "blue";
}

function changeElement() {
    paragraph.innerHTML = `hi welcome to my website <strong> to like my website </strong>`
    paragraph.style.color = "blue";
}

//light / dark mode
function lightMode() {
    body.style.backgroundColor = "white";
    body.style.color = "black";
}
function darkMode() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
}

////////// adding and removing items

const list = document.querySelector('#list');

function addItem() {
    const newItem = document.createElement('li');
    newItem.textContent = "new item";
    list.appendChild(newItem);
}

function removeItem () {
    if (list.lastElementChild) {
       list.removeChild(list.lastChild); 
    }else {
        alert(" Elements has been removed ..")
    }
    
}

const image = document.querySelector('#image');
function changeImage () {
    const url = prompt("inter your image url");
    const borderRadius = prompt("inter your image porder-radius (in px)");
    const padding = prompt("inter your image padding (in px)");
    const height = prompt("inter your image heigh")
    image.style.height = height + "px";
    image.style.borderRadius = borderRadius + "px";
    image.style.padding = padding + "px";
    image.setAttribute("src", url)
}

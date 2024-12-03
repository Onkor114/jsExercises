// exercise 1 of #26

// /sychronous
function blocking(){
    alert("You can't pass untill you click ok")
    return {id: 102, name: "geedi"};
}
console.log("click ok")

const user = blocking();
console.log("user Data is ", user)


//exercise 2 of #26
//asychronous

function nonBlocking(calback){
    setTimeout(()=>{
        const data = {id: 40, userName: "ali"};
        calback(data)
    }, 2000);
}
nonBlocking(function(data){
    console.log("user Data is " ,data)
}); 
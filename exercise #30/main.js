function operate( a,b,callback){
    return callback(a,b);
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

console.log("addition " + operate(2,3, multiply));
console.log("addition " + operate(4,2, divide));
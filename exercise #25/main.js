// //spread operator

// let arr1 = [1,2,3];
// let arr2 = [ ...arr1, 4,5,6,7];
// console.log(arr2);


// //rest operations

// function sum (...numbers) {
//     return numbers.reduce((total, num)=> total+num, 0);
// }
// console.log(sum(20,30))


// exercise #25

let first = [1,2,3,4];
let second = [...first,5,6,7];
console.log(second);


//second exercise of #25

function multiply (...numbers) {
    return numbers.reduce((total,num)=>total*num, 1);
}
console.log(multiply(4,5))
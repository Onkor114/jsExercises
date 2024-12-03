// let students = ["abdi", "ali","kalid"]

// for(let student of students){
//     console.log(student)
// };


// let people = {name: "ali", age: 20, city: "jigjiga", country: "westernSomali", birthday: "2020-20-1"}
// for( let person in people){
//     console.log(person);
// }



let data = [
    {name: "ali", age: 20, city: "jigjiga"},
    {name: "ayan", age: 21, city: "mogadisho"},
    {name: "abdi", age: 22, city: "hargeysa"}
];

for(let cusub of data){
    for(let property in cusub){
        console.log(property + ": " +cusub[property]);
    };
    console.log("-------")
}



// for (let person in people) {
//     console.log(people[person]);
// }
// for (let person of people){
//     console.log(person);
// }
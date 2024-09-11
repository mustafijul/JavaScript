// const person = {
//     name: 'John Doe',
//     age: 30,
//     salary: 100000
// }


// console.log(person.salary = 20000);


// const person = {
//     salary: 20000,
//     age: 30,
//     fullname: function(){
//         return this.age + this.salary;
//     }
// }
// console.log(person.fullname());










const club = {
    president : "shahrear",
    VP : "sakib",
    secretary : "rakib",
    treasurer : "tayyab",
    members : ["rohim", "mahesh", "karim", "sajib"],
    executive : function(){
        return this.president + " " + this.VP + " " + this.secretary + " " + this.treasurer;
    }
}

console.log(club.executive());
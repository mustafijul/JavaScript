function info(name, age, profession,salary){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.salary = salary;
    this.fullName = function(){
        return this.name + " " + this.age;
    }
}

// this is a object
const person1 = new info("John Doe", 30, "Engineer", 50000);

console.log(person1.fullName());



const cars = {
  name: "BMW",
  year: 2020,
  model: "X5",
  color: "Black",
  price: 50000,
};

for (let car in cars) {
  console.log(car); //will print the keys
  console.log(cars[car]); //will print the values
}


// Destructuring of functions parameter

function userBio({firstName,id}) {
    console.log(firstName,id);

}

const users = [
  {
    firstName: "laiba",
    lastName: "Sadiq",
    id: 783,
  },
  {
    firstName: "javeria",
    lastName: "saleem",
    id: 783,
  },
  {
    firstName: "sadia",
    lastName: "gulaam nabi",
    id: 783,
  },
];

for (let user of users) {
  let { firstName, id } = user;

  userBio(user);

}


// Destructuring
const arr = ["red","blue","green","pink","orange"]

let val1 = arr[0]
let val2 = arr[1]

let [,,value2,,value3] = arr

console.log(value2,value3);

const arr1 = [["one","two"],"three"]

let [[num1,num2],var2] = arr1

console.log(num2);

// Destructuring in objects

const car = {
    name: "corola",
    model: [2024,2022],
    wheels: {
        number: 4,
        color: "black"
    },
    engine: true
}

let carName = car.name;
let carModel = car.model

let { engine: carEngine, model:[,model2022], wheels:{color,number} } = car
console.log(model2022);
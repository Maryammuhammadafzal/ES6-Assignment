
// Looping on objects
//For Of loop

//It gives whole object of an array with it's key value
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
//   let { firstName, id } = user;

//   userBio(user);
console.log(user);

}

// For In Loop
//It gives index numbers of array Objects
for (let user in users) {
    console.log(user);
    
}

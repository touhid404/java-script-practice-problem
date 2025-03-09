const person = {
    name: "Riyadh",
    age: 22,
    city: "Dhaka",
    country: "Bangladesh",
    status : true
}

const newJson = JSON.stringify(person);
const nP = JSON.parse(newJson);

console.log(typeof newJson);
console.log(typeof nP);
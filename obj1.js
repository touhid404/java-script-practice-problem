const myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};


for (var key in myObject) {
    console.log("key:",key + " | " + "type: "+ typeof myObject[key]);
  
}
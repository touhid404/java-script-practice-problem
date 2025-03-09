const data = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then ( res => console.log(res));

};

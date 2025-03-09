const loadUsers = ()=>{
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then( data =>  displayUsers(data));
    
}



const displayUsers = (users)=>{

    const ul = document.getElementById("users");
    for(const user of users){
        const li = document.createElement("li");
        li.classList.add("p-2 bg-green font-bold"); 
        li.innerText = user.name;
        ul.appendChild(li);

    }

};




// const loadUsers = ()=>{
    
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then( data =>  displayUsers(data));
    
// }
const loadUsers = async ()=>{
    
   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    displayUsers(data);
    
}
const displayUsers = (posts) => {
    const ul = document.getElementById("posts");
    ul.classList.add("space-y-4","max-w-[700px]","mx-auto"); // Adds spacing between list items

    const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100", "bg-purple-100"];

    posts.forEach((post, index) => {
        const li = document.createElement("li");
        li.classList.add(
            "shadow-lg", "rounded-lg", "p-4", "border", "border-gray-300",
            colors[index % colors.length] // Rotates background colors
        );

        const title = document.createElement("h2");
        title.innerText = post.title;
        title.classList.add("text-xl", "font-bold", "text-gray-800");

        const p = document.createElement("p");
        p.innerText = post.body;
        p.classList.add("text-lg", "text-gray-600", "mt-2");

        li.appendChild(title);
        li.appendChild(p);
        ul.appendChild(li);
    });
};




loadUsers();
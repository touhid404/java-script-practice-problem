const sampleString = "helaaaaalo, world! you have a new connection to this server and will be connected to the server again in the next";
var counter = 0;
for(let i = 0; i <sampleString.length; i++) {
    if(sampleString[i]==='a'){
        counter++;
    }
}

console.log(counter); // Output: 3

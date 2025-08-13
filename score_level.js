if (true){
    var username= "Rachana "
    if(username==="Rachana "){
        var website = "Youtube"
        console.log(username+website)
    }
   // console.log(website)// cant access
}
//console.log(username)

//console.log(this); // In browser: window, In Node.js: {} (or global)

function showThis() {
    console.log(this);
}
showThis();


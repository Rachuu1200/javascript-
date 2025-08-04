console.log("Start");
setTimeout(()=>{
    console.log("Async task done(After 2 second)");
}, 2000);

console.log("End")

setTimeout(function() {
    console.log("I am the inside of setTimeout")
}, 5000);
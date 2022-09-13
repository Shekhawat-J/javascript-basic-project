var x = "outside";
function scopeExample(){
    var y = "Inside";
    console.log("Inside the function scopeExample");
    console.log("x:", x);
    console.log("y", y);
}
scopeExample();
console.log("Outside the function scopeExample");
console.log("x", x);
console.log("y", y);


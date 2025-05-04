function makeid(l) {
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
let length = 5;
let ans = "";

for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * str.length); // Ensure integer index
    let char = str.charAt(index);
    ans += char;
}

console.log(ans); 
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

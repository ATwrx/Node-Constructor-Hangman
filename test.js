let Letter = require("./Letter.js");

let a = new Letter("a");
let b = new Letter("b");
b.isVisible = true;

console.log(a.display());
console.log(b.display());

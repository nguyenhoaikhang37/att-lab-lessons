function load(): unknown {
  return "Hello World ";
}

let hello = load();

// you can use this way
if (typeof hello === "string") {
  const trimmed = hello.trim();
}

// or you can use assertion
const trimmed1 = (hello as string).trim();
// or (warning: this way can not be used with JSX because it is similar to the syntax of a JSX expression)
const trimmed2 = (<string>hello).trim();

// DRAWBACK
let leet;

// Later
leet = "1337";

// Use as number
const number = leet as string;

console.log(number === 1337); // false
console.log(number); // '1337'

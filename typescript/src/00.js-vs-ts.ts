function loadString() {
  return "Hello, World!";
}

function loadNumber() {
  return 123.456;
}

// Javascript
let someLegacyVariable1;

someLegacyVariable1 = loadString();
console.log(someLegacyVariable1.toFixed());

someLegacyVariable1 = loadNumber();
console.log(someLegacyVariable1.toFixed(2));

// Typescript
let someLegacyVariable2: unknown;

someLegacyVariable2 = loadString();
if (typeof someLegacyVariable2 === "string") {
  console.log(someLegacyVariable2.toUpperCase());
}

someLegacyVariable2 = loadNumber();
if (typeof someLegacyVariable2 === "number") {
  console.log(someLegacyVariable2.toFixed(2));
}

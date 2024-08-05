// function that returns a tuple
function getTuple<T>(a: T, b: T): [T, T] {
  return [a, b];
}

let stringArray = getTuple<string>("hello", "world");

let numberArray = getTuple<number>(1.25, 2.56);

let ucStrings = stringArray.map((s) => s.toUpperCase());

let numInts = numberArray.map((n) => n.toFixed());

// Error: Argument of type '"world"' is not assignable to parameter of type 'number'.
let mixedArray = getTuple(1.25, "world");

// =================================
let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = "Hello world";
exampleAny = 123;

// unknown
exampleUnknown = "Hello world";
exampleUnknown = 123;

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// unknown

// error here because unknown is not assignable to number
exampleUnknown.toFixed(2);

if (typeof exampleUnknown === "string") {
  exampleUnknown.toUpperCase();
}

if (typeof exampleUnknown === "boolean") {
  let unknownSetBool: boolean = exampleUnknown;
}

// =================================
// any
function log1(value: any) {
  console.log(value.toUpperCase(2));
}
log2(123.456);

// unknown
function log2(value: unknown) {
  if (typeof value == "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}

log2(123.456);
log2("Hello world");

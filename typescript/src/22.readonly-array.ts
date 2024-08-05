// BEGIN
function reverseSorted(input: Array<number>): Array<number> {
  return input.slice().sort((a, b) => b - a);
}

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

console.log(result); // [5, 4, 3, 2, 1]
console.log(start); // [5, 4, 3, 2, 1] 💥 -> original data was be affect

// AFTER
function reverseSorted(input: ReadonlyArray<number>): Array<number> {
  return input.slice().sort((a, b) => b - a);
}

const start = [1, 2, 3, 4, 5];
const result = reverseSorted(start);

console.log(result); // [5, 4, 3, 2, 1]
console.log(start); // [1, 2, 3, 4, 5] 🧊

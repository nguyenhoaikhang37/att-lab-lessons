import Button from "./components/Button";

// &&
// Trả về falsy đầu tiên
// false && true; // false
// 0 && 1; // 0
// "" && null; // ""
// 5 && NaN && 6; // NaN

// // Không có falsy, trả về giá trị cuối cùng
// 6 && 8; // 8
// ["Red", "Blue"] && { name: "John" } && "Hello"; // "Hello"
// true && 1 && "Hello" && ["Red", "Green"]; // ["Red", "Green"]

// ||
// Trả về truthy đầu tiên
// 1 || 0; // 1
// "Hello" || ""; // "Hello"
// "Hi" || "Hello"; // "Hi"
// 10 || "Hello" || true; // 10

// // Không có truthy, trả về giá trị cuối cùng
// 0 || NaN; // NaN
// "" || 0 || null; // null
// NaN || -0 || undefined || false; // false

// 1. Typescript với useState
// 2. Typescript với onChange input
// 3. Typescript với useRef (sử dụng với cú pháp HTML...Element)
// 4. Generic type với component ButtonGeneric
// 5. Cách tổ chức thư mục cho project lớn với typescript
// 6. Cách import alias path với tsconfig.json
function App() {
  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Button />
    </main>
  );
}

export default App;

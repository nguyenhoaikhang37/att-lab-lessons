import Button from "./components/Button";

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

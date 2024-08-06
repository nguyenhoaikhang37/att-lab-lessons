// 1. Thêm props backgroundColor => có 2 cách thêm type
// - Cách 1: Thêm trực tiếp vào props
// - Cách 2: Tạo interface hoặc type cho props
// 2. Chuyển backgroundColor thành union type
// 3. Thêm prop textColor với union type giống như backgroundColor -> Tạo 1 type chung cho 2 prop
// 2. Thêm disabled với type optional và default là false
// Cách truyền style vào props với type là React.CSSProperties
// 5. Thêm onClick vào Button với 2 dạng (truyền tham số hoặc không truyền tham số)
// Truyền vào setState (không recommended)
// 3. Thêm children vào Button
// 4. Thêm icon vào Button
// 6. Thay vì phải thêm từng attribute vào ButtonProps, ta có thể sd ComponentProps<"button"> để lấy tất cả các attribute của button bằng cách rải ...rest vào
// Kết hợp với thư viện clsx (bộ đôi hoàn hảo với TailwindCSS) để thêm class cho button

const Button = () => {
  return (
    <button className="border-none bg-blue-600 px-4 py-2 text-base rounded text-white">
      Click me
    </button>
  );
};

export default Button;

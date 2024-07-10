# Khóa học Front-end ATT Lab - ReactJS

### Tổng quan 🎯
1. Sử dụng useState với array và object
2. Data Binding

---


<div style="page-break-after: always;"></div>

## 1. Sử dụng useState với array và object
### 1.1. Sử dụng useState với array
```jsx
import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
      'Mua sữa',
      'Đi làm bài tập về nhà',
      'Đọc sách',
    ]);

  const addTodo = () => {
    const newTodo = prompt('Enter new todo:');
    if (newTodo) {
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateTodo = (index) => {
    const updatedTodo = prompt('Update todo:', todos[index]);
    if (updatedTodo) {
      const newTodos = [...todos];
      newTodos[index] = updatedTodo;
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => updateTodo(index)}>Update</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

```

### 1.2. Sử dụng useState với object
```jsx
import React, { useState } from 'react';

function PersonalInfo() {
  const [info, setInfo] = useState({
    name: '',
    age: 0,
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <label>
        Name:
        <input type="text" name="name" value={info.name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={info.age} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={info.address} onChange={handleChange} />
      </label>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>Address: {info.address}</p>
    </div>
  );
}

export default PersonalInfo;
```

### Bài tập
- https://codesandbox.io/p/sandbox/buoi4-bt3-h3hhv9


<div style="page-break-after: always;"></div>

## 2. Data Binding
```jsx
import React from 'react';

function SearchForm() {
    const [searchTerm, setSearchTerm] = React.useState('cats');

    return (
        <>
            <form>
                <label htmlFor="search-input">
                    Search:
                </label>
                <input
                type="text"
                id="search-input"
                value={searchTerm}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
                />
            </form>
            <p>
                Search term: {searchTerm}
            </p>
        </>
    );
}

export default SearchForm;
```

### Controlled vs. Uncontrolled inputs
### Controlled input
```jsx
import React from "react";

function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const handleSubmit = () => {
    alert(searchTerm)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>

      <p>Search term: {searchTerm}</p>

      <button type="submit" onClick={handleSubmit}>Click me</button>
    </>
  );
}

export default SearchForm;
```

### Uncontrolled input
```jsx
import React from "react";

function SearchForm() {
  const handleSubmit = () => {
    const formData = new FormData(event.target);
    const { searchInput } = Object.fromEntries(formData);

    // Do something with `username`, like send it
    // to the server.
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          name="searchInput"
        />
      </form>

      <button type="submit" onClick={handleSubmit}>Click me</button>
    </>
  );
}

export default SearchForm;
```

### Chú ý (không nên đặt useState ban đầu là undefined)
```jsx
// 🚫 Incorrect. `username` will flip from `undefined` to a string:
const [username, setUsername] = React.useState();
// => Warning: A component is changing an uncontrolled input to be controlled.

// ✅ Correct. `username` will always be a string:
const [username, setUsername] = React.useState('');
```

### Bài tập
- https://codesandbox.io/p/sandbox/elegant-oskar-8dgzgk
- https://codesandbox.io/p/sandbox/delicate-wood-fmflkg 
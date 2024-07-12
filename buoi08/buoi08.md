# Khóa học Front-end ATT Lab - ReactJS

### Tổng quan 🎯
1. Fetching on Event
2. Fetching on Mount
---

<div style="page-break-after: always;"></div>


## 1. Fetching on Event
### 1.1. Giới thiệu Fetching on Event
#### Lý thuyết:

Fetching on Event là kỹ thuật để lấy dữ liệu từ một API hoặc một nguồn dữ liệu khác khi một sự kiện cụ thể xảy ra, ví dụ như khi người dùng nhấn nút hoặc thay đổi một trường input. Kỹ thuật này thường được sử dụng khi dữ liệu chỉ cần được lấy về dựa trên hành động của người dùng.

### Link codesandbox

https://codesandbox.io/p/sandbox/lesson-fetch-on-event-xccycd

### Bài tập
https://codesandbox.io/p/sandbox/buoi08-bt1-8ql7km

## 2. Fetching on Mount
### 2.1. Giới thiệu Fetching on Mount
#### Lý thuyết:
Fetching on Mount là kỹ thuật để lấy dữ liệu ngay khi một component được mount vào cây DOM. Kỹ thuật này thường được sử dụng khi dữ liệu cần thiết cho việc render ban đầu của component.

### 2.2. Ví dụ Fetching on Mount
Ví dụ:
Chúng ta sẽ tạo một component mà dữ liệu sẽ được lấy về ngay khi component này được mount.

```jsx
import React, { useState, useEffect } from 'react';

function FetchOnMountComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default FetchOnMountComponent;
```

### Link codesandbox:
https://codesandbox.io/p/sandbox/buoi08-fetch-on-mount-ycrdqm

### Bài tập: 
https://codesandbox.io/p/sandbox/buoi08-bt2-m4dcrm
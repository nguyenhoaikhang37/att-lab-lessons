type User = {
  username: string;
  password: string;
  // Nhập cũng được, không nhâp cũng được
  avatar?: string;
};

const user1: User = {
  username: "user1@gmail.com",
  password: "123123",
  avatar: "avatar1",
};

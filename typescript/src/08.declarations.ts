// ==============Case 1==============
console.log("Logged in user:", process.env.USER);

// use this to declare process type
declare const process: any;

// ==============Case 2==============
// You need to install @types/express to declare type for express
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

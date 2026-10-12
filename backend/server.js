require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const applicationRoutes = require("./routes/applicationRoutes");
app.use("/api/applications", applicationRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// just for testing connection of backend and frontend

//const jokes = [
//   {
//     id: 1,
//     title: "Programming Joke",
//     content: "Why do programmers prefer dark mode? Because light attracts bugs!"
//   },
//   {
//     id: 2,
//     title: "Math Joke",
//     content: "Why was the math book sad? Because it had too many problems."
//   },
//   {
//     id: 3,
//     title: "Computer Joke",
//     content: "Why did the computer go to the doctor? Because it had a virus."
//   },
//   {
//     id: 4,
//     title: "Coffee Joke",
//     content: "Why do programmers love coffee? Because it helps them Java their code!"
//   },
//   {
//     id: 5,
//     title: "Keyboard Joke",
//     content: "Why did the keyboard break up with the mouse? It felt they weren't on the same page."
//   },
//   {
//     id: 6,
//     title: "School Joke",
//     content: "Why did the student eat his homework? The teacher said it was a piece of cake."
//   },
//   {
//     id: 7,
//     title: "Internet Joke",
//     content: "Why did the Wi-Fi go to therapy? It had too many connection issues."
//   },
//   {
//     id: 8,
//     title: "Developer Joke",
//     content: "A developer's favorite place to visit? The Stack Overflow!"
//   },
//   {
//     id: 9,
//     title: "Bug Joke",
//     content: "Why did the bug stay up all night? It was waiting for the developer to fix it."
//   },
//   {
//     id: 10,
//     title: "JavaScript Joke",
//     content: "Why did JavaScript cross the road? Because it wasn't blocked by a type system!"
//   }
// ];

// app.get('/api/jokes', (req, res) => {
//   console.log("Server is running on port jh000");
//   app.on("error", (err) => {
//     console.error("Error occurred:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }); 
//   res.json(jokes);
// });

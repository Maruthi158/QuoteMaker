const express = require("express"); // main thing
const quotes = require("./data/quotes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express(); // main thing
app.use(cors());
dotenv.config;
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// app.get("/api/quotes/:id", (req, res) => {
//   const quote = quotes.find((n) => n._id === req.params.id);

//   res.send(quote);
// });
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server started running on port ${PORT}`));

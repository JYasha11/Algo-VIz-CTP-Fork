const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json()); // work with JSON data

// test db connection and start server
db.authenticate()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(PORT, () => console.log(`Connected to server on Port: ${PORT}`));
  })
  .catch((err) => console.log("Unable to connect", err.message));

// routers to endpoints
const questionsRouter = require("./api/routes/questionsRoutes");
const userRouter = require("./api/routes/userRoutes");

app.use("/api/questions", questionsRouter);
app.use("/api/users", userRouter);

const syncDb = () => db.sync({ alter: true });
//use force:true if you want to clear the database tables
syncDb();
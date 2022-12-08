const express = require('express')
const {sequelize, User, Question} = require ('./models');
const PORT = process.env.PORT || 5000;
const app = express()
app.use(express.json())



sequelize.authenticate()
  .then(() => {
    console.log("Successfully connected to the database");
    app.listen(PORT, () => console.log(`Connected to server on Port: ${PORT}`));
  })
  .catch((err) => console.log("Unable to connect", err.message));

const userRouter = require("./routes/userRoutes");
const questionsRouter = require("./routes/questionsRoutes");

app.use("/api/users", userRouter);
app.use("/api/questions", questionsRouter);

// app.listen({ port: 5000 }, async () => {
//     console.log('Server up on http://localhost:5000')
//     await sequelize.authenticate()
//     console.log("database connected")
// }) 

const syncDb = () => sequelize.sync({ alter: true });
//use force:true if you want to clear the database tables
syncDb();
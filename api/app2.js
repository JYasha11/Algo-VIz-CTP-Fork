const express = require('express')
const {sequelize, User, Question} = require ('./models');

const app = express()
app.use(express.json())

const userRouter = require("./routes/userRoutes");

app.use("/api/users", userRouter);


app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log("database connected")
}) 
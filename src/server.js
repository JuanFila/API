require("express-async-errors") 

const database = require("./database/sqlite")
const AppError = require("./utils/AppError")

const express = require("express");
const app = express()

const routes = require("./routes")

app.use(express.json())

app.use(routes)

database()

app.use((error, request, resonse, next) => {
    if(error instanceof AppError){
        return resonse.status(error.statusCode).json({
            status: "error",
            menssage: error.message
        })
    }

    console.log(error)

    return response.status(500).json({
        status: "error",
        manssage: "Internal server error"
    })
})

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

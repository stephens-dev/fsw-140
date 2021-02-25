const express = require("express")
const mysql = require("mysql")


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
    }
)

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("Connected to Database")
})

const app = express()

app.listen('9000', () => {
    console.log("Local Server is Running")
})
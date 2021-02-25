const express = require("express")
const mysql = require("mysql")


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'covid'
    }
)

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("Connected to Database")
})

const app = express()

app.get('/getdisplay', (req, res) => {
    let sql = "SELECT date, state, death, positive, recovered FROM alhistory"

    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send(result)
    })
})

app.listen('9000', () => {
    console.log("Local Server is Running")
})
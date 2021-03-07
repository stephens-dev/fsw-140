const express = require("express")
const mysql = require("mysql")
const bodyParser = require('body-parser')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'todo'
    }
)

db.connect((err) => {
    if (err) {
        throw err
    }
    console.log("Connected to Database")
})

const app = express()
app.use(bodyParser.json())
app.get('/gettodos', (req, res) => {
    let sql = "SELECT item, description, completed, id FROM todos"

    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
        res.send(result)
    })
})
app.post('/posttodo', (req, res) => {
    console.log(req.body)
    let {item, description,completed} = req.body
    let sql = `insert into todos (item, description, completed) values ('${item}', '${description}', ${completed})`
    // let sql = "insert into todos (item, description, completed) values 'req.body'"
    // let post = {item: req.body.item, description: req.body.description, completed: req.body.completed}
    // let sql = "insert into todos set ?"
    db.query(sql, (err, results) => {
        if (err) {
            throw err
        }
        console.log(results)
        res.send(200)
    })
})
app.delete('/deletetodo/:todoId', (req, res) => {
    let sql = `DELETE FROM todos WHERE id = ${req.params.todoId}`;

    db.query(sql, (err, results) => {
        console.log(req.params.todoId)
        res.send(200)
    })
})

app.put('/updatetodo/:id' , (req, res) => {
    let {item, description, completed} = req.body
    let sql = `UPDATE todos set item = '${item}',description= '${description}', completed='${completed}' WHERE id = ${req.params.id} `

    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }
        res.send("200")
    })
})

app.listen('9000', () => {
    console.log("Local Server is Running")
})
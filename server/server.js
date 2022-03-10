const express = require('express');
const app = express();
const mysql = require('mysql')
const PORT = process.env.PORT || 3001;

// MY SQL DB
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'employeeSystem',
})

// ROUTES & CONTROLLERS

app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;

db.query(
    'INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)',
     [name, age, country, position, wage], 
     (err, result) => {
         if (err) {
             console.log(err)
         } else {
             res.send("Values Inserted")
         }
     }
     )
})



// LISTENER
app.listen(PORT, ()=> {
    console.log("Server is running on Port: "+PORT)
})
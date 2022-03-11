const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
// JSON BODY PARSER
app.use(express.json());

// MY SQL DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'pizza123',
    database: 'employeeSystem',
    
    
})
// DB CONNECT
// db.connect((err) => {
//     if (err) {
//         throw err
//     }
//     console.log('MySQL Connected')
// })


/******* ROUTES & CONTROLLERS *******/ 

// CREATE DB
// app.get('/create', (req, res) => {
//     let sql = 'CREATE DATABASE employees'
//     db.query(sql, err => {
//         if (err) {
//             throw err;
//         }
//         res.send("Database Created")
//     })
// })

// CREATE NEW EMPLOYEE 
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
             res.status(201).json({
                 message: 'Employee Added Successfully',
             })
         }
     }
     )
})

// GET EMPLOYEES  
app.get('/employees', (req, res) => {
    db.query('SELECT * FROM employees',
     (err, result) => {
         if (err) {
             console.log(err)
         } else {
             res.status(200).json({
                 message: "Found Employees",
                 result,
             })
         }

     })
})



// LISTENER
app.listen(PORT, ()=> {
    console.log("Server is running on Port: "+PORT)
})
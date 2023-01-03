// import express from "express"
// import mysql from 'mysql'
// import cors from 'cors';

const express= require('express');
const  mysql= require('mysql');
const  cors= require('cors');
const path=require('path');

const app = express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'127.0.0.1',
    user: 'devuser',
    password:'Josefinaflores73',
    database:'x100pre',
});

db.connect((err) => {

    if (err) {
        console.log(`Can't connect to database`, err)
        return;
    }

    console.log(`Connected to database`)
})

// app.get('/',(req,res)=>{
//     res.json("THERES A CONNECTION WITH THE BACKEND :P")
// });

app.get('/products', (req,res)=>{
    const q ="SELECT * FROM products"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});

//EXPRESS USING PATH

app.use(express.static(path.join(__dirname, './client', './build')));
app.use((req,res)=>{
    res.sendFile(path.join(__dirname, './client', './build', 'index.html'));
});



app.listen(5000, ()=>{
    console.log('The server is running on port 5000')
});
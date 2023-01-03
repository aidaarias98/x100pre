import express from "express"
import mysql from 'mysql'
import cors from 'cors';

const app = express()
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'127.0.0.1',
    user: 'devuser',
    password:'Josefinaflores73',
    database:'x100pre',
});

app.get('/',(req,res)=>{
    res.json("THERES A CONNECTION WITH THE BACKEND :P")
});

app.get('/products', (req,res)=>{
    const q ="SELECT * FROM products"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    });
});


app.listen(5000, ()=>{
    console.log('The server is running on port 5000')
});
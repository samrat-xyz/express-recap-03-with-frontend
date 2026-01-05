const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();
app.use(express.json()); 

app.use(cors())

app.get('/',(req,res)=>{
    res.send('express recap 03 running with frontend')
})
const users = [
  {
    id: 1,
    name: "Rahim Uddin",
    email: "rahim@example.com",
    role: "admin",
    age: 26,
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@example.com",
    role: "user",
    age: 22,
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@example.com",
    role: "user",
    age: 24,
  },
  {
    id: 4,
    name: "Sadia Islam",
    email: "sadia@example.com",
    role: "moderator",
    age: 27,
  },
  {
    id: 5,
    name: "Tanvir Ahmed",
    email: "tanvir@example.com",
    role: "user",
    age: 21,
  }
];

app.get('/users',(req,res)=>{
    res.send(users)
})

app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1
    users.push(newUser);
    res.send(newUser)
})

app.listen(port)

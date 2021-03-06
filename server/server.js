const express = require('express');
const app = express();

const md5 = require('js-md5');

const sqlite3 = require('./modules/DbConnection');
const db = sqlite3().getInstance;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

const login = require("./routs/login");
const users = require("./routs/users");
const products = require("./routs/prod");

app.use('/login', login);
app.use('/users', users);
app.use('/products', products);

app.get("/", (req, res) => {
    res.json({data: "Hello World"});
});

// app.get('/users', (reg, res)=>{
//
//     new Promise((resolve, reject)=>{
//         db.all("SELECT * FROM users", (err, data)=>{
//             if (data && data.length){
//                 resolve(data)
//             }else{
//                 reject("No users yet")
//             }
//         });
//     })
//         .then(users =>{
//             res.json({data: users})
//         })
//         .catch(err =>{
//             res.json({error: err})
//         })
// });

// app.post("/login", (req, res)=>{
//     console.log(req.body.name);
//     console.log(req.body.password);
//
//     new Promise((resolve, reject)=>{
//         db.get("SELECT * FROM users WHERE name =? AND password =?", [req.body.name, req.body.password], (err, data)=>{
//             console.log(data);
//             if (data){
//                 resolve(data)
//             }else{
//                 reject("Empty")
//             }
//         });
//     })
//
//         .then(user =>{
//             console.log("Update then");
//             return new Promise((resolve, reject)=>{
//                 const token = md5(user.email) + md5(Date());
//                 db.run("UPDATE users SET token =? WHERE name =? AND password =?", [token, req.body.name, req.body.password], (err, data)=>{
//                     // console.log(data);
//                     if (err){
//                         reject("Error with token")
//                     }
//                     resolve(token)
//                 });
//             });
//         })
//
//         .then(token =>{
//             res.json({
//                 token: token,
//                 status: "isLogin"
//             })
//         })
//         .catch(err =>{
//             res.json({error: err});
//         });
// });
//

app.listen(9000, (err) => {
    console.log("Run server...")
});

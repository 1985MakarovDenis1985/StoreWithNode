
const express = require('express');
const router = express.Router()

const md5 = require('js-md5');

const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;

router.post("/", (req, res)=>{

    console.log(req.body.email);
    console.log(req.body.password);

    new Promise((resolve, reject)=>{
        db.get("SELECT * FROM users WHERE email =? AND password =?", [req.body.email, req.body.password], (err, data)=>{
            // console.log(data);
            if (data){
                resolve(data)
            }else{
                reject("smt password & nikname didn`t true")
            }
        });
    })

        .then(user =>{
            console.log("Update then");
            return new Promise((resolve, reject)=>{
                const token = md5(user.email) + md5(Date());
                db.run("UPDATE users SET token =? WHERE name =? AND password =?", [token, req.body.name, req.body.password], (err, data)=>{
                    // console.log(data);
                    if (err){
                        reject("Error with token")
                    }
                    resolve(token)
                });
            });
        })

        .then(token =>{
            res.json({
                token: token,
                status: "isLogin"
            })
        })
        .catch(err =>{
            res.json({error: err});
        });
});

module.exports = router;

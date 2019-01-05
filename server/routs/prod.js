
const express = require('express');
const router = express.Router()

const md5 = require('js-md5');

const sqlite3 = require('../modules/DbConnection');
const db = sqlite3().getInstance;


router.get('/', (reg, res)=>{

    new Promise((resolve, reject)=>{
        db.all("SELECT * FROM products", (err, data)=>{
            if (data && data.length){
                resolve(data)
            }else{
                reject("No products yet")
            }
        });
    })
        .then(products =>{
            res.json({data: products})
        })
        .catch(err =>{
            res.json({error: err})
        })
});


router.get('/:id', (req, res)=>{

    console.log(req.params);

    new Promise((resolve, reject)=>{
        db.get("SELECT * FROM products WHERE id=?",[req.params.id], (err, data)=>{
            if (data){
                resolve(data)
            }else{
                reject("product have not yet")
            }
        });
    })
        .then(products =>{
            res.json({data: products})
        })
        .catch(err =>{
            res.json({error: err})
        })
});


module.exports = router;


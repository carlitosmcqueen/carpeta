const express = require('express')
const app = express()
const db = require("../funciones")
const DB = new db("../Data/productos.json");


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views","./views")
app.set("view engine", "ejs")

app.get("/productos", async (req, res) => {
    try{
        const data =await DB.getAll()
        res.render("productos",{allProducts:data})
    }catch(e){
        res.send({error: e})
    }
})
app.get("/", async (req, res) =>{
    res.render("ingresar")
})
app.post("/", async (req, res) =>{
    const data = await DB.save(req.body)
    res.render("ingresar",{data})
})

app.listen(8080,()=>{
    console.log("ejs funcionando")
})
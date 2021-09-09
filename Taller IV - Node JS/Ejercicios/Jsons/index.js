var express = require('express')
var bodyparser = require('body-parser')
var app = express()

var objeto = {
    "mensaje": "hola mundo",
    "arreglo": [1,2,3]
}

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.listen(3000,()=>{
    console.log('Servidor abierto en el puerto 3000')
})

app.get('/obtener', function(req,res){
    res.json({"mensaje":"Hola Mundo", "arreglo": [1,2,3]})
})
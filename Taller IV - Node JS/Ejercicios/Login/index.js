var express = require('express')
var bodyparser = require('body-parser')
var app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

var usuarios = [
    {
        email: 'jafethfer@yahoo.es',
        password: 'holamundo'
    },
    {
        email: 'ejemplo@gmail.com',
        password: '12345'
    }
]

app.get('/usuarios',function(req,res){
    res.send(usuarios)
})

app.get('/error',function(req,res){
    res.sendStatus(404)
})

app.post('/validar',function(req,res){
    let email = req.body.email
    let password = req.body.password

    for(usuario in usuarios){
        if(usuarios[usuario].email==email && usuarios[usuario].password==password){
            res.send('bienvenido, estas registrado!')
            return
        }
    }
    res.send('Lo sentimos, no estas registrado.')
})

app.post('/agregar',function(req,res){
    let email = req.body.email
    let password = req.body.password

    usuarios.push({"email": email,"password": password})
    res.send('Usuario agregado!')
})

app.listen(3000,()=>{
    console.log('Servidor abierto en el puerto 3000')
})
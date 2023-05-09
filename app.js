require("dotenv").config()
const express = require('express')
const hbs = require('hbs');

const app = express()
const port=process.env.PORT

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contendo estatico

app.use(express.static("public"))


app.get('/',(req, res)=> {
    res.render("home", {
        nombre:"Sergio Partida",
        titulo:"Curso de Node"
    })
  })

app.get('/generic',(req, res)=> {
    res.render("generic", {
        nombre:"Sergio Partida",
        titulo:"Curso de Node"
    })
  })

app.get('/elements',(req, res)=> {
    res.render("elements", {
        nombre:"Sergio Partida",
        titulo:"Curso de Node"
    })
  })





app.get('/otraruta',(req, res)=> {
    res.send('Hello World desde otra ruta')
  })

  app.get('*',(req, res)=> {
    res.sendFile(__dirname +"/public/404.html")
  })





app.listen(port,()=>{
    console.log(`Servidor Escuchando en el puerto ${port}`)
})
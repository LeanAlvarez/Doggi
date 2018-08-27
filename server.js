const express = require('express');

var app = express();

//vistas con pug
app.set('view engine', 'pug');

//indica al server que puede acceder a los archivos estaticos
app.use(express.static('public'));

//config inicial del servidor
app.get('/', (req, res) =>{
  //res.send('Hello GUORL');
  res.render('index')
})

// ruta signup
app.get('/signup', (req, res) =>{
  res.render('index')
})
//ruta signin
app.get('/signin', (req, res) =>{
  //res.send('Hello GUORL');
  res.render('index')
})

//escucha del servidor
app.listen(3000, (err) =>{
  if(err) return console.log('hubo un error'), process.exit(1);

  console.log('Todo funciona de puta madre!');
})

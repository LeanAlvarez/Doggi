const express = require('express');

var app = express();

app.get('/', (req, res) =>{
  res.send('Hello GUORL');
})


app.listen(3000, (err) =>{
  if(err) return console.log('hubo un error'), process.exit(1);

  console.log('Todo funciona de puta madre!');
})

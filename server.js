const path = require('path');
const express = require('express');
const compression = require('compression');
const app = express();

// Middlewares
app.use(compression());

// Static files.
app.use(express.static('dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});

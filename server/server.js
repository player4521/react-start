const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/host', (req, res) => {
    res.send({ host: `player0` });
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})

// DB접속 테스트
app.get('/api/test', (req, res) => {
  db.query("select * from test", (err, data) => {
      if(!err) {
          res.send(data);

      } else {
          console.log(err);
          res.send(err);
      }
  })
})
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/api/host', (req, res) => {
    res.send({ host: `player0` });
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})

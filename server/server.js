const express = require('express');
const app = express();

// 서버와 시퀄라이즈 연동
const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})

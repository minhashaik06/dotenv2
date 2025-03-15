const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const isAdmin = process.env.IS_ADMIN === 'true';
  res.send(isAdmin ? "Welcome, Admin!" : "Welcome, User!");
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

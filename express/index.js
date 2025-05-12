const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log("GET / received");
  res.send('Hello from Express!');
});

app.get('/health', (req, res) => {
  console.log("GET /health");
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});


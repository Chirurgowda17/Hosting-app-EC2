const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Rude App</title>
  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #111;
      color: #fff;
      font-family: sans-serif;
      text-align: center;
    }
    .emoji { font-size: 10rem; }
    h1 { font-size: 3rem; letter-spacing: 2px; }
  </style>
</head>
<body>
  <div class="emoji">🖕</div>
  <h1>FUCK YOU</h1>
</body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

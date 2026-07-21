const express = require('express');
const cors = require('cors');
const audioRoutes = require('./routes/audio');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/audio', audioRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});


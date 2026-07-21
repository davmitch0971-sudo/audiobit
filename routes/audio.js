const express = require('express');
const router = express.Router();

// Define your POST endpoint here
router.post('/generate', (req, res) => {
  console.log("Generate request received!");
  res.json({ message: "Generation started successfully" });
});

module.exports = router;

const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; 


app.use(cors());
app.use(express.json());

app.post('/api/submit', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.status(200).json({ message: 'Data received successfully', data: formData });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
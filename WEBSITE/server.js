// server.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Register endpoint
app.post('/api/register', (req, res) => {
  const { name, id, email, phone, password } = req.body;

  // Save the registration details to the database or perform any necessary operations
  // ...

  // Return a response indicating successful registration
  res.json({ success: true, message: 'Registration successful' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

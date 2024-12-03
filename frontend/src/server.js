const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const app = express();
const db = new sqlite3.Database('./database.db');

// Middleware
app.use(express.json());

// Sign-In Route
app.post('/api/auth/signin', (req, res) => {
  const { email, password } = req.body;

  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Compare the hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error comparing passwords' });
      }
      if (isMatch) {
        return res.json({ success: true });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid email or password' });
      }
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

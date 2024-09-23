// Import required modules
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Simulate storage of views (in a file for simplicity)
const VIEWS_FILE = './views.json';

// Middleware to read and update views count
app.get('/api/profile-views', (req, res) => {
  fs.readFile(VIEWS_FILE, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading views data.' });
    }
    
    let views = JSON.parse(data).views || 0;
    
    // Increment views count
    views += 1;
    
    // Save updated views count
    fs.writeFile(VIEWS_FILE, JSON.stringify({ views }), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving views data.' });
      }
      
      // Send the updated views count back to the client
      res.json({ views });
    });
  });
});

// Serve static files (e.g., your frontend HTML)
app.use(express.static('public'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

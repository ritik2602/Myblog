const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configure Express to use Handlebars as the template engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Serve static files (CSS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Include your routes
app.use('/', require('./routes/blog')); // Ensure the correct path to your routes file

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

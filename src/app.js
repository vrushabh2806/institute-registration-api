const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const registrationRoutes = require('./routes/registrationRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Debugging: Log environment variables
console.log('Database Connection String:', process.env.DB_CONNECTION_STRING);
console.log('Port:', process.env.PORT);

// Database connection
mongoose.connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Database connected successfully'))
.catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/registration', registrationRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const Hero = require('../models/Hero');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/adminApp', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Define routes
const heroRouter = require('./routes/hero');
const contactRouter = require('./routes/contact');

app.use('/api/hero', heroRouter);
app.use('/api/contact', contactRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
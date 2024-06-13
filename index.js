const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Replace <username>, <password>, and <your-cluster-url> with your MongoDB Atlas credentials and cluster URL.
const mongoURI = mongodb+srv,//Dhanush:Dhanush@123@cluster0.f8ryype.mongodb.net/';

// Connect to MongoDB
mongoose(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

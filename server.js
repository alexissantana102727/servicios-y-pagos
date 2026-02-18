// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const productsRoute = require('./routes/products');
const authRoute = require('./routes/auth');
const paymentRoute = require('./routes/payment');

app.use('/api/products', productsRoute);
app.use('/api/auth', authRoute);
app.use('/api/payment', paymentRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

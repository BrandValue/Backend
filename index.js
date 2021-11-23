const express = require('express');
const path = require('path');
const food_items = require('./routes/foods/food-items');
const location = require('./routes/users/locations/location');
const payment = require('./routes/users/payments/payment');
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, DELETE, PATCH, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization, x-info, x-id");
    res.header('Access-Control-Expose-Headers', "x-info, authorization");
    next();
});

app.use(express.static(path.join(__dirname, 'public')))
app.use('/food', food_items);
app.use('/user/location', location);
app.use('/user/payment', payment);

app.listen(5000, () => {
    console.log('started');
})

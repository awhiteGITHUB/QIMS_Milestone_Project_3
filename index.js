
const express = require('express');

const app = express();
const port = 4000;


app.use(express.urlencoded({extended: false}));

const dashboardRoutes = require('./controllers/dashboard');

app.use('/', dashboardRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = router;
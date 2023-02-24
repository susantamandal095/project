const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const routes = require('./routes/routes.js');
const routesAdmin = require('./routes/admin_routes.js');
const routesBugs = require('./routes/bugs.js');
const routesProduct = require('./routes/product_routes.js')
const app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(3000,()=> console.log('server start at port no 3000'));
app.use('/user',routes);
app.use('/admin',routesAdmin);
app.use('/bugss',routesBugs);
app.use('/product',routesProduct);
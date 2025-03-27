const express = require('express');
const connectDB = require('./src/Database/db');
const cors=require('cors')
const userrouter = require('./src/Controllers/users');
const productrouter = require('./src/Controllers/products');
const orderrouter = require('./src/Controllers/Order');
const cookieParser = require('cookie-parser')
const app = express();

app.use(express.json());
app.use(cors())
app.use(cookieParser())

require('dotenv').config({
    path: './src/config/.env'
});

const PORT = process.env.PORT || 5000;
const url = process.env.db_url;

app.get('/', (req, res) => {   
    res.send('Hello World');
});

app.use('/order',orderrouter)
app.use('/auth', userrouter);
app.use('/product', productrouter);




app.listen(PORT, async () => {
    try {
        await connectDB(url);
        console.log(`Server is running on Port:${PORT} Link: http://localhost:${PORT}`);
    } catch (err) {
        console.log(err);
    }
});

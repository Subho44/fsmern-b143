const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const userroutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
connectdb();
app.use(cors());
app.use(express.json());
app.use('/api/users',userroutes);
const PORT = process.env.PORT || 5600;
app.listen(PORT,()=>{
    console.log("server is running port 5600");
});
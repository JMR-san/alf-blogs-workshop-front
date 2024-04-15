require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require('./config/db');
const cors = require('cors'); 
//const { message } = require('statuses');
const { errorHandler } = require('./middleware/errorMiddleware');


app.use(cors({
    origin: 'http://localhost:5173'
  }));

//connecting to database
connectDb();

// Serve static files from the public directory
app.use(express.static('public'));

app.get('/AWS', (req, res) => {
    res.status(200).json({ message: 'HELLO AWSCC'});
})

// Post Routers
const postRouter = require('./routers/postRouter');
app.use('/posts', postRouter);

// User Error Middleware
app.use(errorHandler)

app.listen(8080, () => {
    console.log('Server is running in port 8080');
})
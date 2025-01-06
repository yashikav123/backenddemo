import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoute.js'; // Import routes
import cors from 'cors';  //connection for front end
const app = express();

app.use(bodyParser.json());
app.use(cors());//this is connection for front end
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGO_URL;

// Use the userRoute for handling requests to /api/user
app.use('/api/user', userRoute);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

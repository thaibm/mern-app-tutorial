import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import posts from './routers/posts.js';
import users from './routers/users.js';

const app = express();
const PORT = process.env.port || 5000;
const BASE_URL = '/api'
const URI =
  'mongodb+srv://admin:OG137eMzuUt0gqG1@cluster0.wsxmm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// use Router
app.use(BASE_URL, posts);
app.use(BASE_URL, users);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT} at ${new Date()}`);
    });
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

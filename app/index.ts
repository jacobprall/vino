import path from 'path';
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import wineRouter from './routes/wines';
const cors = require('cors');
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page

app.use(express.static(path.resolve('./') + '/build/frontend'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/wines/:user_id', wineRouter)

app.get('/api', (req: Request, res: Response): void => {
  res.send('You have reached the API!');
});

app.get('*', (req: Request, res: Response): void => {
  res.sendFile(path.resolve('./') + '/build/frontend/index.html');
});


// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

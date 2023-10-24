// import express from 'express';
// import pino from 'pino';
// import dd from 'dd-trace'
// const logger = pino();
// dd.init({
//   logInjection: true,
  
// })

// const app = express();
// const port = process.env.PORT || 3000;

// // Use Pino logger middleware
// app.use((req, res, next) => {
//   logger.info({ method: req.method, url: req.url });
//   next();
// });

// // Define a sample route
// app.get('/', (req, res) => {
//   logger.info(`Hello, Express API with Pino Logger in TypeScript!`)
//   res.send('Hello, Express API with Pino Logger in TypeScript!');
// });

// // Start the Express server
// app.listen(port, () => {
  //   logger.info(`Server is running on port ${port}`);
  // });
  
import dd from 'dd-trace';
dd.init({
  service: "test"
  
});

// src/app.ts
import express from 'express';
import expressPino from 'express-pino-logger';
import pino from 'pino';
import pinoHttp from 'pino-http';
import axios from 'axios';
const logger = pino();


const app = express();
const port = 3000;

// Add Pino logger to Express middleware
app.use(expressPino(  logger  ));

app.get('/', async (_req, res) => {
  logger.info('This is a general log message.');
  res.send('Hello, Docker Compose with Node.js and TypeScript!');

  // Make an Axios GET request to http://www.google.com
  try {
    const response = await axios.get('http://www.google.com');
    logger.info(`Google.com response status: ${response.status}`);
  } catch (error: any) {
    logger.error(`Error making GET request to Google: ${error.message}`);
  }
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
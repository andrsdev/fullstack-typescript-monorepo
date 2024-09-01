import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import { productsRoute } from './routes/products';
import { config } from './config';
import { healthRoute } from './routes/health';
import { staticRoute } from './routes/static';
import { errorHandler } from './middlewares/error-handler';

const app = express();

// Parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
staticRoute(app);
healthRoute(app);
productsRoute(app);

app.use(errorHandler);

// Listener
app.listen(config.port, () => {
  console.log(` Server API listening on http://localhost:${config.port}`);
});

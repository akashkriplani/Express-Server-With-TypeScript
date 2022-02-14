import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './controllers/AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({ keys: ['thiscanbeanyencryptedorunencryptedstringvalue'] })
);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

import express from 'express';
import { gravatarUri } from './util';

const app = express();

app.get('/api/v1/:email', (req, res) => {
  const email = req.params.email;
  const uri = gravatarUri(email);
  res.setHeader('content-type', 'text/plain');
  uri !== ''
    ? res.status(200).send(uri)
    : res.status(400).send({
        status: '400',
        message: 'Bad request, invaild email adress',
      });
});

export default app;

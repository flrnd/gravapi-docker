import app from './app';
import { printHelp } from './util';

const startServer = port => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

process.env.PORT !== undefined ? startServer(process.env.PORT) : printHelp();

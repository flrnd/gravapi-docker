import program from 'commander';
import { version } from '../package.json';
import app from './app';

const defaultPort = 1234;

const startServer = port => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

program
  .version(version)
  .command('serve [port]')
  .alias('s')
  .description('start the server.')
  .action(port => {
    port !== undefined ? startServer(port) : startServer(defaultPort);
  });

program.parse(process.argv);

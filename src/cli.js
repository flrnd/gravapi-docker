import program from 'commander';
import { version, description } from '../package.json';
import { printHelp, defaultPort } from './util';
import { startServer } from './server';

program.version(version, '-v, --version').description(description);

program.option(
  '-s, --serve [port]',
  'start the server and bind to [port]',
  value => {
    return parseInt(value);
  },
  defaultPort,
);

program.on('--help', () => printHelp());

program.parse(process.argv);

if (process.argv.length < 3) {
  process.env.PORT !== undefined ? startServer(process.env.PORT) : printHelp();
} else {
  startServer(program.serve);
}

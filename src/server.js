import program from 'commander';
import { version, description } from '../package.json';
import app from './app';

const defaultPort = 1234;

const startServer = port => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

program.version(version, '-v, --version').description(description);

program.option(
  '-s, --serve [port]',
  'start the server and bind to [port]',
  value => {
    return parseInt(value);
  },
  1234,
);

program.on('--help', () => {
  console.log('');
  console.log('  Examples:');
  console.log(
    '    $ node build/start.js          try to bind the server using the env PORT variable',
  );
  console.log(
    '    $ node build/start.js -s       bind the server to the default port: 1234',
  );
  console.log(
    '    $ node build/start.js -s 4321  bind the server to custom port: 4321',
  );
});

program.parse(process.argv);

process.env.PORT !== undefined
  ? startServer(process.env.PORT)
  : console.log('-h for more info');

//    port !== undefined ? startServer(port) : startServer(defaultPort);

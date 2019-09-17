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
  defaultPort,
);

program.on('--help', () => {
  console.log('');
  console.log('  Examples:');
  console.log(
    '    $ node build/start.js          try to bind the server using the env PORT variable',
  );
  console.log(
    `    $ node build/start.js -s       bind the server to the default port: ${defaultPort}`,
  );
  console.log(
    '    $ node build/start.js -s 4321  bind the server to custom port: 4321',
  );
});

program.parse(process.argv);

if (process.argv.length < 3) {
  process.env.PORT !== undefined
    ? startServer(process.env.PORT)
    : console.log('-h for more info');
}

startServer(program.port);

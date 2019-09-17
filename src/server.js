import argv from 'yargs';
import app from './app';

let PORT = 5000;
const options = argv.usage('Usage: -p <PORT>').option('p', {
  alias: 'port',
  describe: 'server listening port',
  type: 'integer',
  demandOption: false,
}).argv;

// Check if env variable PORT is defined
// to run the server on that port instead of
// the default port.
options.port ? (PORT = options.port) : (PORT = process.env.PORT);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

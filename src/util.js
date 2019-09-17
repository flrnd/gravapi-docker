import validator from 'email-validator';
import crypto from 'crypto';

export const defaultPort = 1234;

export const gravatarUri = email => {
  const baseURL = 'https://www.gravatar.com/avatar/';
  return validator.validate(email)
    ? baseURL.concat(hashedMail(email)).concat('.jpg')
    : '';
};

export const printHelp = () => {
  console.log('');
  console.log('Examples:');
  console.log(
    '  $ PORT=1337 gravapi-cli             use env variable PORT         ',
  );
  console.log(
    `  $ gravapi-cli -s                    use default port: ${defaultPort}`,
  );
  console.log('  $ gravapi-cli -s 4321               use custom port: 4321');
};

const hashedMail = email =>
  crypto
    .createHash('md5')
    .update(email)
    .digest('hex');

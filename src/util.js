import validator from 'email-validator';
import crypto from 'crypto';

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
};

const hashedMail = email =>
  crypto
    .createHash('md5')
    .update(email)
    .digest('hex');

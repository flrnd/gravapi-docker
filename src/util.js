import validator from 'email-validator';
import crypto from 'crypto';

export const gravatarUri = email => {
  const baseURL = 'https://www.gravatar.com/avatar/';
  return validator.validate(email)
    ? baseURL.concat(hashedMail(email)).concat('.jpg')
    : '';
};

const hashedMail = email =>
  crypto
    .createHash('md5')
    .update(email)
    .digest('hex');

import jwt, { SignOptions } from 'jsonwebtoken';
import config from 'config';
import * as fs from "fs";
const privateKEY  = fs.readFileSync('./config/private.key', 'utf8');
const publicKEY  = fs.readFileSync('./config/public.key', 'utf8');

export const signJwt = (
  payload: Object,
  keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
  options: SignOptions
) => {
  const privateKey = Buffer.from(
    config.get<string>(keyName),
    'base64'
  ).toString('ascii');
  return jwt.sign(payload, privateKEY, {
    ...(options && options),
    algorithm: 'RS512',
  });
};

export const verifyJwt = <T>(
  token: string,
  keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey'
): T | null => {
  try {
    const publicKey = Buffer.from(
      config.get<string>(keyName),
      'base64'
    ).toString('ascii');
    const decoded = jwt.verify(token, publicKEY) as T;

    return decoded;
  } catch (error) {
    return null;
  }
};

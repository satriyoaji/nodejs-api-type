import jwt, {SignOptions} from 'jsonwebtoken';
import config from 'config';
import * as fs from "fs";

export const signJwt = (
  payload: Object,
  keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
  options: SignOptions
) => {
  // const privateKey = Buffer.from(
  //   config.get<string>(keyName),
  //   'base64'
  // ).toString('ascii');
  const privateKey = config.get<string>(keyName)

  let privateKeyLoaded = (privateKey === "./config/private.key" || privateKey === "") ?
      fs.readFileSync(privateKey, 'utf8') :
      privateKey;

  return jwt.sign(payload, privateKeyLoaded, {
    ...(options && options),
    algorithm: 'RS512',
  });
};

export const verifyJwt = <T>(
  token: string,
  keyName: 'accessTokenPublicKey' | 'refreshTokenPublicKey'
): T | null => {
  try {
    // const publicKey = Buffer.from(
    //   config.get<string>(keyName),
    //   'base64'
    // ).toString('ascii');
    const publicKey = config.get<string>(keyName)

    let publicKeyLoaded = (publicKey === "./config/private.key" || publicKey === "") ?
        fs.readFileSync(publicKey, 'utf8') :
        publicKey;

    return jwt.verify(token, publicKeyLoaded) as T;
  } catch (error) {
    return null;
  }
};

import jwt from 'jsonwebtoken'
import type { SignOptions, JwtPayload } from 'jsonwebtoken';

export interface InputPayload {
  id: string;
  userName: string;
}

const jwtSecret = 'nodejs-jwt-secret';

export const generateJsonWEbtoken = (
  payload: InputPayload
): string => {
  const expireAfterSecond = 30 * 60; // expire after 30 mins

  const options: SignOptions = {
    issuer: 'issuer',
    subject: 'subject',
    audience: 'test-audience',
    expiresIn: expireAfterSecond,
    notBefore: 0,
    jwtid: 'nodejs-jwt-id',
    algorithm: 'HS256',
  }
  const token = jwt.sign(payload, jwtSecret, options);
  return token;
}

export const validateJsonWebToken = (token: string): JwtPayload => {
  let payloadResult: JwtPayload = {};
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      console.error(err);
      return;
    }
    if (typeof decoded === 'string') {
      console.error('validate jwt return payload is string type');
      return;
    }
    payloadResult = decoded;
  })
  return payloadResult;
}

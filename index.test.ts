import { describe, test } from "vitest";
import { 
  generateJsonWEbtoken,
  validateJsonWebToken,
} from '.'

import type {
  InputPayload,
} from '.'

describe('main', () => {
  let specToken = '';
  test('generate token', () => {
    const payload: InputPayload = {
      id: 'testing id',
      userName: 'test user name',
    }
    specToken = generateJsonWEbtoken(payload);
    console.log(specToken);
  });

  test('validate token', () => {
    const payload = validateJsonWebToken(specToken);
    console.log(payload);
  })
})

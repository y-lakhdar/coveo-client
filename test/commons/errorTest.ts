import * as _ from 'underscore';
import { expect } from 'chai';
import { StaticErrorMessage } from '../../src/commons/errors';

export const ErrorTest = () => {
  describe('Error Messages', () => {
    it('Should not be an empty string', () => {
      const keys: string[] = Object.keys(StaticErrorMessage);

      _.each(keys, (key: string) => {
        expect(StaticErrorMessage[key]).to.not.be.empty.string;
      });
    });
  });
};

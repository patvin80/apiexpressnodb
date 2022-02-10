import 'mocha'
import {expect} from 'chai'
import { getNewId, convertToInt } from '../helpers/helper.js'
import posts from '../data/posts.js'

describe("Validate Helpers", () => {
    it('Gets New ID From Array', async () => {
        const result = await getNewId([1,2,3])
        expect(result).to.be.NaN;
      });

    it('Invoke convertToInt with data', async () => {
        const result = convertToInt('0000001232.00');
        expect(result).to.be.not.null;
    });     
})
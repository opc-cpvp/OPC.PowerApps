import { should } from 'chai';
import { describe } from 'mocha';
should();
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
const expect = chai.expect;
//chai.use(sinonChai);

describe("smoke test", () => {
    it("checks equality", () => {
        expect(true).equals(true);
    });
})
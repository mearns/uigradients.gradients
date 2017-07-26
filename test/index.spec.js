const gradients = require('../').gradients;
const gradientSource = require('../gradients.json');

const expect = require('chai').expect;

const hexColorMatcher = /^#(?:[0-9a-f]{3}){1,2}$/i;

describe('gradients', () => {
  it('should have one key for every defined gradient with no other keys', () => {
    const definedGradientNames = gradientSource.map(gradientDef => gradientDef.name);
    expect(gradients).to.have.keys(definedGradientNames);
  });

  Object.keys(gradients).forEach((gradientName) => {
    describe(`gradient '${gradientName}'`, () => {
      it('should be an array of length no less than 1', () => {
        expect(gradients[gradientName]).to.be.instanceOf(Array)
          .and.have.length.not.below(1);
      });

      it('should contain only valid colors in 24-bit hex notation', () => {
        gradients[gradientName].forEach((color) => {
          expect(color).to.match(hexColorMatcher);
        });
      });
    });
  });
});

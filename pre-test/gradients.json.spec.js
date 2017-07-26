
const gradients = require('../gradients.json');
const expect = require('chai').expect;
const Color = require('color');

describe('gradients.json', () => {
  it('should not contain any duplicate names', () => {
    const names = {};
    gradients.forEach((gradient) => {
      const name = gradient.name;
      if (names[name]) {
        throw new Error(`Duplicate gradient name: ${name}`);
      }
      names[name] = true;
    });
  });

  gradients.forEach((gradient) => {
    describe(`Gradient ${gradient.name}`, () => {
      it('should define a name', () => {
        expect(gradient).to.have.a.property('name').which.is.a('string');
      });

      it('should define an array of at least one color', () => {
        expect(gradient)
          .to.have.a.property('colors')
          .which.is.an.instanceOf(Array)
          .and.has.length.not.below(1);
      });

      it('should define only valid colors', () => {
        gradient.colors.forEach((color) => {
          Color(color);
        });
      });

      it('should have no superfluous properties', () => {
        expect(gradient).to.have.keys('name', 'colors');
      });
    });
  });
});

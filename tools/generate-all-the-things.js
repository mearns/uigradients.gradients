/* eslint no-console: off */

const gradients = require('../gradients.json');
const fs = require('mz/fs');
const Color = require('color');

function colorToHex(c) {
  return Color(c).hex();
}

function addGradientsToMap(map, gradient) {
  map[gradient.name] = gradient.colors.map(colorToHex); // eslint-disable-line no-param-reassign
  return map;
}

const gradientMap = gradients.reduce(addGradientsToMap, {});

const js = `module.exports={gradients:${JSON.stringify(gradientMap)}};`;

fs.mkdir('dist/')
  .catch((error) => {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  })
  .then(() => fs.writeFile('dist/index.js', js))
  .then(() => {
    console.log('Done');
  })
  .catch((error) => {
    console.error(`Error occurred during transcription: ${error.message}`);
  });

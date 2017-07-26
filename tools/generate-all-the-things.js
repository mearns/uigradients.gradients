const gradients = require('../gradients.json');
const fs = require('mz/fs');
const Color = require('color');

const gradientMap = gradients.reduce((dict, gradient) => {
        dict[gradient.name] = gradient.colors.map((c) => Color(c).hex());
        return dict;
    }, {});

const js = `module.exports = {
  gradients: ${JSON.stringify(gradientMap)}
};
`;

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


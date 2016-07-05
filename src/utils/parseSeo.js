export const parseSeo = () => {
  try {
    const jsonFile = require('../../api/seo.json');
    console.log(jsonFile);
  } catch (exc) {
    console.error('File not found');
  }
};

const _ = require('lodash');
const path = require('path');

const kebabToTitleCase = (text) => {
  if (!text) return '';

  return text
    .replace(/-/g, ' ')
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
    .replace(/ /g, '');
};

const getRandomDefaultComponent = () => {
  const sourcePath = path.join(__dirname, '../src/components/Images/');
  const files = fs.readdirSync(sourcePath);

  const defaults = files.filter((file) => {
    return file.startsWith('default-');
  });

  const outerBounds = defaults.length;
  const index = parseInt(Math.random() * (outerBounds + 1));
  // eslint-disable-next-line prettier/prettier
  const number = index < 10 ? (index === 0 ? `01` : `0${index}`) : index;
  return `Default${number}`;
};

const getSlug = ({ slug, title }, fileAbsolutePath, type) => {
  return path.join(
    '/',
    type === 'article' ? 'blog' : type,
    _.kebabCase(slug || title || fileAbsolutePath.split('/').pop()),
    `/`,
  );
};

const toHeroImageComponent = (image) => {
  if (image && image.startsWith('http')) return 'url';
  const component = kebabToTitleCase(image).replace(/\.|jpg|png|gif|svg/g, '');
  if (component) return component;
  return getRandomDefaultComponent();
};

const toTimestamp = (date) => {
  return new Date(date).getTime();
};

module.exports = {
  kebabToTitleCase,
  getSlug,
  toTimestamp,
  toHeroImageComponent,
};

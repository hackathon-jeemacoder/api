// Skip Husky install in production and CI
if (process.env.APP_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0);
}

const husky = require('husky');
console.log(husky());

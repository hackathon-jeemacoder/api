// .husky/install.mjs

// Skip Husky install in production and CI
if (process.env.APP_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0);
}

import husky from 'husky';
console.log(husky());

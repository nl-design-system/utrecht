module.exports = {
  reject: [
    // Angular needs to be upgraded in combination with Typescript.
    // Somehow devkit is a patch version which matches the 11 major Angular package
    '@angular-devkit/build-angular',
  ],
};

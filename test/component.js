'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-picantes-react:component', () => {
  it('should create source test and stories for component', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true})
      .then(() => {
        assert.file([
          'index.js',
          'Component.js',
          'Component.test.js',
          'Component.stories.js'
        ]);
      });
  });
});

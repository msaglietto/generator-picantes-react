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
          'Test/index.js',
          'Test/Component.js',
          'Test/Component.test.js',
          'Test/Component.stories.js'
        ]);
      });
  });

  it('should create stylesheet and use isomorphic-style-loader when nostyles is false', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true, nostyles: false})
      .then(() => {
        assert.file([
          'Test/index.js',
          'Test/styles.scss',
          'Test/Component.js',
          'Test/Component.test.js',
          'Test/Component.stories.js'
        ]);

        assert.fileContent('Test/Component.js', 'export default withStyles(s)(Component);');
      });
  });

  it('should create a class when stateless is false', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true, stateless: false})
      .then(() => {
        assert.fileContent('Test/Component.js', 'class Component extends React.Component');
      });
  });

  it('should create a wrapper when useapollo is true', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withOptions({quiet: true, useapollo: true})
      .then(() => {
        assert.fileContent('Test/index.js', 'export default apollo');
      });
  });

  it('should also work with prompt', () => {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withArguments(['Test'])
      .withPrompts({stateless: false, nostyles: false, useapollo: true})
      .then(() => {
        assert.file([
          'Test/index.js',
          'Test/styles.scss',
          'Test/Component.js',
          'Test/Component.test.js',
          'Test/Component.stories.js'
        ]);

        assert.fileContent('Test/Component.js', 'export default withStyles(s)(Component);');
        assert.fileContent('Test/Component.js', 'class Component extends React.Component');
        assert.fileContent('Test/index.js', 'export default apollo');
      });
  });
});

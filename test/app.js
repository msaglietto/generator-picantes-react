'use strict';
var path = require('path');
var helpers = require('yeoman-test');

describe('generator-picantes-react:app', () => {
  it('should do nothing', () => {
    return helpers.run(path.join(__dirname, '../generators/app'));
  });
});

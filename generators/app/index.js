'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the badass ' + chalk.red('generator-picantes-react') + ' generator!'
    ));

    this.log(yosay(
      'Use as ' + chalk.green('yo picantes-react:component name')
    ));
  }
});

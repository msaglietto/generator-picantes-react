'use strict';
const Generator = require('yeoman-generator');

class ComponentGenerator extends Generator {
  constructor(args, options) {
    super(args, options);

    this.argument('componentName', {type: String, required: true});

    this.option('stateless', {
      desc: 'Create a functional component instead of a class',
      defaults: false
    });

    this.option('nostyles', {
      desc: 'Do not create a stylesheet for the component',
      defaults: false
    });

    this.option('quiet', {
      desc: 'Do not prompt me',
      defaults: false
    });
  }

  promting() {
    if (this.options.quiet) {
      return;
    }
  }

  writing() {
    const settings = this.options;

    if (this.options.stateless) {
      if (this.options.nostyles) {
        this.fs.copyTpl(
          this.templatePath('StatelessNoStyles.js'),
          this.destinationPath('Component.js'),
          settings
        );
      } else {
        this.fs.copyTpl(
          this.templatePath('StatelessWithStyles.js'),
          this.destinationPath('Component.js'),
          settings
        );
        this.fs.copyTpl(
          this.templatePath('styles.scss'),
          this.destinationPath('styles.scss'),
          settings
        );
      }
    } else if (this.options.nostyles) {
      this.fs.copyTpl(
        this.templatePath('ClassNoStyles.js'),
        this.destinationPath('Component.js'),
        settings
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('ClassWithStyles.js'),
        this.destinationPath('Component.js'),
        settings
      );
      this.fs.copyTpl(
        this.templatePath('styles.scss'),
        this.destinationPath('styles.scss'),
        settings
      );
    }

    if (this.options.useapollo) {
      this.fs.copyTpl(
        this.templatePath('indexApollo.js'),
        this.destinationPath('index.js'),
        settings
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('indexNoApollo.js'),
        this.destinationPath('index.js'),
        settings
      );
    }

    this.fs.copyTpl(
      this.templatePath('ComponentTest.js'),
      this.destinationPath('Component.test.js'),
      settings
    );

    this.fs.copyTpl(
      this.templatePath('ComponentStories.js'),
      this.destinationPath('Component.stories.js'),
      settings
    );
  }
}

module.exports = ComponentGenerator;

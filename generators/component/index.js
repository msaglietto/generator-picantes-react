'use strict';
const Generator = require('yeoman-generator');

class ComponentGenerator extends Generator {
  constructor(args, options) {
    super(args, options);

    this.argument('componentName', {type: String, required: true});

    this.option('stateless', {
      desc: 'Create a functional component instead of a class',
      defaults: true
    });

    this.option('nostyles', {
      desc: 'Do not create a stylesheet for the component',
      defaults: true
    });

    this.option('useapollo', {
      desc: 'Create apollo wrapper on index.js',
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

    return this.prompt([{
      type: 'confirm',
      name: 'stateless',
      message: 'Would you like to create a stateless component?',
      default: this.options.stateless
    }, {
      type: 'confirm',
      name: 'nostyles',
      message: 'Should we omit the stylesheet and isomorphic style wrapper?',
      default: this.options.nostyles
    }, {
      type: 'confirm',
      name: 'useapollo',
      message: 'Will the component use apollo graphQL queries?',
      default: this.options.useapollo
    }]).then(answers => {
      console.log(answers);
      Object.assign(this.options, answers);
    });
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

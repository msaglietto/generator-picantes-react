import React, { Components, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.scss';

const propTypes = {

};

const defaultProps = {

};

/**
 * Component - Description
 * @extends Components
 */
export class Component extends Components {

  /**
   * render - Description
   *
   * @returns {type} Description
   */
  render() {
    return (
      <div>
      </div>
    );
  }
}

Component.displayName = '<%= componentName %>';
Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default withStyles(s)(Component);

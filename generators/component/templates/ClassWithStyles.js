import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.scss';

const propTypes = {

};

const defaultProps = {

};

/**
 * Component - Description
 * @extends Component
 */
export class Component extends React.Component {

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

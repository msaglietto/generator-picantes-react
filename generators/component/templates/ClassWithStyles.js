import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './styles.scss';

/**
 * Component - Description
 *
 * @extends Component
 */
class Component extends React.Component {
  /**
   * @type {string}
   */
  static displayName = '<%= componentName %>';

  /**
   * @type {object}
   */
  static propTypes = {

  };

  /**
   * @type {object}
   */
  static defaultProps = {

  };

  /**
   * render - React component render
   *
   * @returns {node} React Node
   */
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withStyles(s)(Component);

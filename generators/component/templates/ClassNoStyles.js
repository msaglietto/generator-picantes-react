import React, { Components, PropTypes } from 'react';

const propTypes = { };
const defaultProps = { };

class Component extends Components {

  render() {
    return (
      <div>
      </div>
    );
  }
}

<%= componentName %>.displayName = '<%= componentName %>';
<%= componentName %>.propTypes = propTypes;
<%= componentName %>.defaultProps = defaultProps;

export default Component;

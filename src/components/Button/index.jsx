import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  text = '',
  type = '',
  onSubmit = () => {},
  onClick = () => {},
  className = '',
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      className={className}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button", "reset"]).isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  onSubmit: () => {},
  className: '',
};

export default Button;

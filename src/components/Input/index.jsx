import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type = 'text',
  className = '',
  placeholder = '',
  value = '',
  name = '',
  onChange = () => {},
  autoComplete = 'on',
  id = '',
  refprops,
  onBlur = () => {},
  readOnly = false,
  lang = '',
  pattern,
  style,
}) => {

  return (
    <input
      style={style}
      autoComplete={autoComplete}
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      ref={refprops}
      onBlur={onBlur}
      readOnly={readOnly}
      lang={lang}
      pattern={pattern}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  lang: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  name: '',
  id: '',
  onChange: () => {},
  onBlur: () => {},
  readOnly: false,
  lang: '',
};

export default Input;

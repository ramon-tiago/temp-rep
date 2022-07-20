import React from 'react';
import PropTypes from 'proptypes';
import './styles.css';

export class Button extends React.Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <button className="button" disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

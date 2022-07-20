import './styles.css';
import p from 'prop-types';

export const TextInput = ({ searchValue, handlechange }) => {
  return (
    <input
      type="search"
      placeholder="Type your serach"
      className="text-input"
      value={searchValue}
      onChange={handlechange}
    />
  );
};

TextInput.propTypes = {
  searchValue: p.string.isRequired,
  handlechange: p.func.isRequired,
};

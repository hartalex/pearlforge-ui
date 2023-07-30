import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ text }) => <input type="text" placeholder={text} />;

SearchBar.propTypes = {
  text: PropTypes.string,
};

SearchBar.defaultProps = {
  text: '',
};

export default SearchBar;

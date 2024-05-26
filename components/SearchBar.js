import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className={styles.searchBar}
      placeholder="Search blog posts..."
      value={searchTerm}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;

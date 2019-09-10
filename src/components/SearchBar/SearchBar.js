import React from 'react';
// styles
import styles from './SearchBar.module.css';
// assets
import search from '../../asssets/search.png';

const SearchBar = ({ filter = '', handleChangeFilter }) => (
  <form className={styles.form}>
    <img src={search} alt="Search" className={styles.img} />
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={filter}
      placeholder="Поиск юзеров по имени"
      onChange={handleChangeFilter}
      autoComplete="off"
    />
  </form>
);

export default SearchBar;

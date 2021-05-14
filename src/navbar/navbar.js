import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.baseContainer}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/login">login</Link>
    </div>
  );
};

export default Navbar;

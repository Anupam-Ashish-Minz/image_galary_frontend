import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.baseContainer}>
      <form action="/login" method="POST">
        <label htmlFor="">email</label>
        <input type="email" name="email"/>
        <label htmlFor="">password</label>
        <input type="password" name="password"/>
        <button type="submit" className={styles.signinButton}>Sign In</button>
        <Link className={styles.registerLink} to="/regester">Don't have an account sign up</Link>
      </form>
    </div>
  )
};

export default Login;


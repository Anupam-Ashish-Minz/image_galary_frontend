import React from 'react';
import styles from './profile.module.css';

const Profile = () => {

  return (
    <div className={styles.baseContainer}>
      this is the profile
      <form action="/logout" method="POST">
        <button type="submit" className={styles.logoutButton}>logout</button>
      </form>
    </div>
  )
};

export default Profile;

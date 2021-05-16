import React, { useState, useEffect } from 'react';
import styles from './profile.module.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("/api/logged_in_user")
      .then(data => data.json())
      .then(data => setUser(data));
  }, []);

  return (
    <div className={styles.baseContainer}>
      Welcome, {user}
      <form action="/logout" method="POST">
        <button type="submit" className={styles.logoutButton}>logout</button>
      </form>
    </div>
  )
};

export default Profile;

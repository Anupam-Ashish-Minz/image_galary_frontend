import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({loginStatus}) => {
  const [open, setOpen] = useState(false);

  const handleClose = (event) => {
    const [dropDown] = document.getElementsByClassName(styles.dropDown);
    const [appBar] = document.getElementsByClassName(styles.appBar);
    if (!dropDown.contains(event.target) && !appBar.contains(event.target)) { 
      setOpen(false);
    }
  }

  useEffect(()=>{
    if (open) {
      document.addEventListener("mousedown", handleClose);
    } else {
      document.removeEventListener("mousedown", handleClose);
    }
  }, [open])

  return (
    <div className={styles.baseContainer}>
      <AppBar open={open} setOpen={setOpen} />
      <div 
        className={styles.dropDown} 
        style={{display: open ? "flex" : "none" }}
      >
        <Link onClick={()=>setOpen(false)} className={styles.navLink} to="/">home</Link>
        <Link onClick={()=>setOpen(false)} className={styles.navLink} to="/about">about</Link>
        <Link onClick={()=>setOpen(false)} className={styles.navLink} to="/login">{ loginStatus ? "profile" : "login" }</Link>
      </div>
    </div>
  );
};

const AppBar = ({open, setOpen}) => {
  return (
    <div className={styles.appBar}>
      <button className={styles.dropDownButton} onClick={()=>setOpen(!open)}>
        { open ? 
            // close icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg> 
            // menu icon
        : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg> }
      </button>
    </div>
  )
};

export default Navbar;

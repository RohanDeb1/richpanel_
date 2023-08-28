import React, {useState} from 'react';
import styles from './Current.module.css';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import { Navigate } from 'react-router-dom';


const Current = () => {
  const [cancelled, setCancelled] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    await fetch('/cancel-subscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })

    setCancelled(true);
  };

  if(cancelled) {
    return <Navigate to={`/cancel`} />
  }
  	
  	return (
      <div className={styles['rectangle-parent']}>
      <div className={styles['group-child']}>
        <div className={styles['mask-group']}>
          <div className={styles['mask-group1']}>
            <div className={styles['mask-group-child']} />
          </div>
        </div>
        <div className={styles['mask-group2']}>
          <div className={styles['current-plan-details']}>Current Plan Details</div>
        </div>
        <div className={styles['basic']}>Basic</div>
        <div className={styles['phonetablet']}>Phone+Tablet</div>
        <div className={styles['your-subscription-has']}>
          Your subscription has started on May 13th, 2023 and will auto renew on June 12th, 2024.
        </div>
        <div className={styles['mask-group3']}>
          <div className={styles['current-plan-details']}>₹ 2,000/yr</div>
        </div>
        <button className={styles['mask-group4']}>
          
        </button>
        <button className={styles['cancel']} onClick={handleClick}>Cancel</button>
        <div className={styles['mask-group5']}>
          <button className={styles['change-plan']}>
          <Link to="/Home" className={styles['change-plan-link']}>
            <span>Change</span>Plan
          </Link>
          </button>
        </div>
        <div className={styles['group-item']} />
        <div className={styles['mask-group6']}>
          <div className={styles['active']}>Active</div>
        </div>
      </div>
    </div>
    );
};

export default Current;

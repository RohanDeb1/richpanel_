import React from 'react';
import styles from './Payments.module.css';
import { Link } from 'react-router-dom';

const Payments = () => {
  	
  	return (
		<div className={styles["container"]}>	
		<div className={styles["rectangle-parent"]}>
		<div className={styles["group-child"]} />
		<div className={styles["group-item"]} />
		<div className={styles["group-inner"]} />
		<div className={styles["plan-name"]}>Plan Name</div>
		<div className={styles["order-summary"]}>Order Summary</div>
		<div className={styles["enter-your-credit"]}>Enter your credit or debit card details below</div>
		<div className={styles["complete-payment"]}>Complete Payment</div>
		<div className={styles["basic"]}>Basic</div>
		<div className={styles["monthly"]}>Monthly</div>
		<div className={styles["mo"]}>₹ 2,000/mo</div>
		<div className={styles["billing-cycle"]}>Billing Cycle</div>
		<div className={styles["plan-price"]}>Plan Price</div>
		
		<div className={styles["line-div"]} />
		<div className={styles["group-child1"]} />
		<div className={styles["group-child2"]} />
		<div className={styles["group-child3"]}></div>
		<div className={styles["card-number"]}>
        <input type="text" placeholder="Card Number" />
		</div>
		

		<div className={styles["card-input-container"]}>
		<input className={styles["card-input-n"]} type="text" placeholder="Card Number" />
		<input className={styles["card-input-d"]} type="number" placeholder="MM/YY" />
		<input className={styles["card-input-c"]} type="number" placeholder="CVC" />
		</div>


		<input className={styles["mmyy"]} type="date" placeholder="MM/YY" />
		<input className={styles["cvc"]} type="number" placeholder="CVC" />
		<button className={styles["confirm-payment"]} style={{ color: 'white' }}>
		<Link to="/Current" className={styles["current"]}>
		Confirm Payment
		</Link>
		</button>
	</div>
	</div>
    );
};

export default Payments;
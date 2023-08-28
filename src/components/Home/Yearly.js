
import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Yearly.module.css";
import Payments from "../Payments/Payments";


const Yearly = () => {
  return (
    <div className={styles.container}>

    <div className={styles["rectangle-parent"]}>
    <div className={styles["group-child"]} />
    <div className={styles["choose-the-right"]}>Choose the right plan for you</div>
    <button className={styles["group-item"]} />
    <button className={styles["group-inner"]} />
    <button className={styles["rectangle-button"]} />
    <button className={styles["yearly"]}>Yearly</button>
    
    <Link to="/monthly" className={styles["monthly"]}>
          Monthly
    </Link>

    <button className={styles["mobile"]}>Mobile</button>
    <button className={styles["group-child1"]} />
    <button>
        <Link to="/Payments" className={styles["next"]}>
          Next
        </Link>
    </button>
    <button className={styles["group-child2"]} />
    <button className={styles["basic"]}>Basic</button>
    <button className={styles["group-child3"]} />
    <button className={styles["standard"]}>Standard</button>
    <button className={styles["group-child4"]} />
    <button className={styles["premium"]}>Premium</button>
    <div className={styles["line-div"]} />
    <div className={styles["group-child5"]} />
    <div className={styles["group-child6"]} />
    <div className={styles["monthly-price"]}>Monthly price</div>
    <div className={styles["div"]}>₹ 1000</div>
    <div className={styles["good"]}>Good</div>
    <div className={styles["p"]}>480p</div>
    <b className={styles["phone"]}>Phone</b>
    <b className={styles["tablet"]}>Tablet</b>
    <b className={styles["tablet1"]}>Tablet</b>
    <b className={styles["computer"]}>Computer</b>
    <b className={styles["tv"]}>TV</b>
    <b className={styles["tv1"]}>TV</b>
    <b className={styles["tv2"]}>TV</b>
    <b className={styles["computer1"]}>Computer</b>
    <b className={styles["computer2"]}>Computer</b>
    <b className={styles["tablet2"]}>Tablet</b>
    <b className={styles["tablet3"]}>Tablet</b>
    <b className={styles["phone1"]}>Phone</b>
    <b className={styles["phone2"]}>Phone</b>
    <b className={styles["phone3"]}>Phone</b>
    <div className={styles["good1"]}>Good</div>
    <div className={styles["p1"]}>480p</div>
    <div className={styles["p2"]}>1080p</div>
    <div className={styles["khdr"]}>4K+HDR</div>
    <div className={styles["best"]}>Best</div>
    <div className={styles["better"]}>Better</div>
    <div className={styles["div1"]}>₹7000</div>
    <div className={styles["div2"]}>₹ 5000</div>
    <div className={styles["div3"]}>₹ 2000</div>
    <div className={styles["devices-you-can"]}>Devices You can use to watch</div>
    <div className={styles["resolution"]}>Resolution</div>
    <div className={styles["video-quality"]}>Video Quality</div>
  </div>
    </div>
  
  );
};

export default Yearly;

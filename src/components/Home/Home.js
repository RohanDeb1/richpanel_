import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Payments from "../Payments/Payments";



const Home = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className={styles.container}>
      <div className={styles["rectangle-parent"]}>
        <div className={styles["group-child"]} />
        <div className={styles["choose-the-right"]}>Choose the right plan for you</div>
        <button className={styles["group-item"]} />
        <button className={styles["group-inner"]} />
        <button className={styles["rectangle-button"]} />
        <button className={styles["monthly"]}>Monthly</button>
        
          <Link to="/yearly" className={styles["yearly"]}>
            Yearly
          </Link>
        
        <button className={styles["group-child1"]} />
        <button>
        <Link to="/Payments" className={styles["next"]}>
          Next
        </Link>
        </button>
        <button className={styles["group-child2"]} />
        
        <button
  className={`${styles.mobile} ${selectedPlan === "mobile" ? styles.selected : ""}`}
  onClick={() => handlePlanSelection("mobile")}
>
  Mobile
</button>

<button
  className={`${styles.basic} ${selectedPlan === "basic" ? styles.selected : ""}`}
  onClick={() => handlePlanSelection("basic")}
>
  Basic
</button>

<button
  className={`${styles.standard} ${selectedPlan === "standard" ? styles.selected : ""}`}
  onClick={() => handlePlanSelection("standard")}
>
  Standard
</button>

<button
  className={`${styles.premium} ${selectedPlan === "premium" ? styles.selected : ""}`}
  onClick={() => handlePlanSelection("premium")}
>
  Premium
</button>

        <button className={styles["group-child3"]} />
        <button className={styles["standard"]}>Standard</button>
        <button className={styles["group-child4"]} />
        <button className={styles["premium"]}>Premium</button>
        <div className={styles["line-div"]} />
        <div className={styles["group-child5"]} />
        <div className={styles["group-child6"]} />
        <div className={styles["monthly-price"]}>Monthly price</div>
        <div className={styles["div"]}>₹ 100</div>
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
        <div className={styles["div1"]}>₹700</div>
        <div className={styles["div2"]}>₹ 500</div>
        <div className={styles["div3"]}>₹ 200</div>
        <div className={styles["devices-you-can"]}>Devices You can use to watch</div>
        <div className={styles["resolution"]}>Resolution</div>
        <div className={styles["video-quality"]}>Video Quality</div>
      </div>
    </div>
  );
};


export default Home;

import React from 'react'
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h2>Build and Grow Your Business with Expert Guidance</h2>
        <p>
          At MayFrame group, we specialized in driving transformative growth and
          success that assist businesses in various domains.
        </p>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default Hero
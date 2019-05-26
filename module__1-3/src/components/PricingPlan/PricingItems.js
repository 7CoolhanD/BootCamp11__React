import React from 'react';
import PropsTypes from 'prop-types';
import styles from './PricingPlan.module.css';

const PricingItems = ({ el }) => (
  <div className={styles.item}>
    <i className={styles.icon}>
      <img src={el.icon} alt="" />
    </i>
    <h2 className={styles.label}>{el.label}</h2>
    <p className={styles.capacity}>{el.capacity}</p>
    <p className={styles.description}>{el.description}</p>
    <p className={styles.price}>{el.price}</p>
    <button type="submit" className={styles.button}>
      Get Started
    </button>
  </div>
);

PricingItems.propTypes = {
  el: PropsTypes.shape().isRequired,
};

export default PricingItems;

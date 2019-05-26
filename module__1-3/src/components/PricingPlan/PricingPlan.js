import React from 'react';
import PropTypes from 'prop-types';
import PricingItems from './PricingItems';
import style from './PricingPlan.module.css';

const PricingPlan = ({ plan }) => (
  <ul className={style.pricingPlan}>
    {plan.map(el => (
      <li key={el.id}>
        <PricingItems el={el} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  plan: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PricingPlan;

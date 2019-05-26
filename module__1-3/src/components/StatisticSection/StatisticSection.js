import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticSection.module.css';

const randomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255,
  )},${Math.floor(Math.random() * 200)})`;
};

const StatisticSection = ({ title, stats }) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.list}>
      {stats.map(el => (
        <li
          key={el.id}
          className={styles.item}
          style={{ backgroundColor: randomColor() }}
        >
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}>{el.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

StatisticSection.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

StatisticSection.defaultProps = {
  title: 'Upload statistic',
};

export default StatisticSection;

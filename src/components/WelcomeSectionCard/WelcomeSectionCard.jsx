import React from 'react';
import styles from './WelcomeSectionCard.module.scss';
import PropTypes from 'prop-types';
import NewTabIcon from '@/icons/new-tab.svg';

export default function WelcomeSectionCard({ title, totalItem, items, children }) {
  const linkText = title.toLowerCase();

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.title}>
          <span className={styles.icon}>{children}</span>
          {title}
        </div>
        <div className={styles.count}>{totalItem}</div>
      </div>
      <div className={styles.card}>
        <a href={`/map#${linkText}`} className={styles.overlay}>
          <span className={styles.link}>
            <NewTabIcon />
          </span>
        </a>
        {items.map(({ url, logo, title }) => (
          <div key={url + title} className={styles.card_item}>
            <img src={logo} alt={title + 'logo'} />
          </div>
        ))}
      </div>
    </div>
  );
}

WelcomeSectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  totalItem: PropTypes.number,
  children: PropTypes.node,
  items: PropTypes.array,
};

WelcomeSectionCard.defaultProps = {
  items: [],
};
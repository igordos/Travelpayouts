import * as React from 'react';
import * as styles from './WalletMenu.less';
import data from '../../data/data.json';
const { balance, next_payout, currency } = data.header;

class WalletMenu extends React.Component {
  renderValue(value: number) {
    let currencyTemplate;
    // Вид валюты для примера, можно добавить список побольше
    switch (currency) {
      case 'rub':
        currencyTemplate = '₽';
      default:
        currencyTemplate = '₽';
    }
    return `${value
      .toString()
      .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}${' '}${currencyTemplate}`;
  }
  render() {
    return (
      <ul className={styles.menu}>
        <li key={0} className={styles.item}>
          <span className={styles.title}>Баланс</span>
          <span className={styles.value}>{this.renderValue(balance)}</span>
        </li>
        <li key={1} className={styles.item}>
          <span className={styles.title}>К выплате</span>
          <span className={styles.value}>{this.renderValue(next_payout)}</span>
        </li>
      </ul>
    );
  }
}

export default WalletMenu;

import * as React from 'react';
import * as styles from './Header.less';
import WalletMenu from '../WalletMenu/WalletMenu';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <WalletMenu />
      </header>
    );
  }
}

export default Header;

import * as React from 'react';
import logo from './logo.svg';
import * as styles from './Sidebar.less';
import Menu from '../../components/Menu/Menu';

class Sidebar extends React.Component {
  render() {
    return (
      <nav className={styles.sidebar}>
        <img className={styles.logo} src={logo} />
        <Menu />
      </nav>
    );
  }
}

export default Sidebar;

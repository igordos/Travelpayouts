import * as React from 'react';
import * as styles from './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>© Travelpayouts, 2011–2019</div>
      </footer>
    );
  }
}

export default Footer;

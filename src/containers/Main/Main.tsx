import * as React from 'react';
import * as styles from './Main.less';
import Services from '../Services/Services';

class Main extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <Services />
      </main>
    );
  }
}

export default Main;

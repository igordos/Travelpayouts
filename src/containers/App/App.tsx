import * as React from 'react';
import * as styles from './App.less';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className={styles.grid}>
        <Sidebar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

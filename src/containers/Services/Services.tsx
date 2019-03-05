import * as React from 'react';
import * as styles from './Services.less';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import data from '../../data/data.json';
import IBonuses from '../../types/IBonuses';

const { bonuses } = data;

interface IServicesState {
  value: string;
}

class Services extends React.Component<{}, IServicesState> {
  state = {
    value: ''
  };

  handleChangeValue = (value: string) => this.setState({ value });

  results = () => {
    const { value } = this.state;
    const results = [] as IBonuses[];
    bonuses.forEach(item => {
      if (
        item.title.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1
      ) {
        results.push(item);
      }
    });
    return results;
  };

  render() {
    return (
      <React.Fragment>
        <h1 className={styles.title}>Сервисы</h1>
        <Filter onChangeFilter={this.handleChangeValue} />
        <Card bonuses={this.results()} />
      </React.Fragment>
    );
  }
}

export default Services;

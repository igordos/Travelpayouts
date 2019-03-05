import * as React from 'react';
import * as styles from './Filter.less';

interface IFilterProps {
  onChangeFilter: (value: string) => void;
}

interface IFilterState {
  value: string;
}

class Filter extends React.Component<IFilterProps, IFilterState> {
  state = {
    value: ''
  };

  handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState({ value }, () => {
      this.props.onChangeFilter(value);
    });
  };

  handleResetValue = () =>
    this.setState({ value: '' }, () => {
      this.props.onChangeFilter('');
    });

  render() {
    const { value } = this.state;

    return (
      <div className={styles.filter}>
        <label className={styles.label}>
          <span className={styles.label__title}>Фильтр</span>
          <input
            className={styles.input}
            type="text"
            value={value}
            placeholder="Поиск"
            onChange={this.handleChangeValue}
          />
        </label>
        <button className={styles.btn} onClick={this.handleResetValue}>
          Сбросить
        </button>
      </div>
    );
  }
}

export default Filter;

import * as React from 'react';
import * as styles from './Menu.less';

// В iconClass подставляем нужный класс иконки из стилей, если такой имеется
const dataMenu = [
  {
    title: 'Dashboard',
    iconClass: styles.icon
  },
  {
    title: 'Отчеты',
    iconClass: styles.icon
  },
  {
    title: 'Статистика',
    iconClass: styles.icon
  },
  {
    title: 'Офферы',
    iconClass: styles.icon
  },
  {
    title: 'Инструменты',
    iconClass: styles.icon
  },
  {
    title: 'Разработчикам',
    iconClass: styles.icon
  },
  {
    title: 'Сервисы',
    iconClass: styles.icon,
    active: true
  },
  {
    title: 'Финансы',
    iconClass: styles.icon
  }
];

interface IMenuState {
  activeItem: string;
}

// Можно добавить Link, оставил для простоты просто список
class Menu extends React.Component<{}, IMenuState> {
  constructor(props: {}) {
    super(props);
    let activeItem;
    dataMenu.forEach(item => {
      if (item.active) {
        activeItem = item.title;
      }
    });
    this.state = { activeItem };
  }

  handleClickItem = (item: string) => {
    this.setState({ activeItem: item });
  };

  renderItems() {
    const { activeItem } = this.state;

    return dataMenu.map((item, key) => {
      const className =
        item.title === activeItem
          ? `${styles.item}${' '}${styles.item_active}`
          : styles.item;

      return (
        <li
          key={key}
          className={className}
          onClick={() => this.handleClickItem(item.title)}
          title={item.title}
        >
          <i className={item.iconClass} />
          <span>{item.title}</span>
        </li>
      );
    });
  }

  render() {
    return <ul className={styles.menu}>{this.renderItems()}</ul>;
  }
}

export default Menu;

import * as React from 'react';
import * as styles from './Card.less';
import IBonuses from '../../types/IBonuses';

interface ICardProps {
  bonuses: IBonuses[];
}

class Card extends React.Component<ICardProps> {
  copyToClipboard(e: React.FormEvent<HTMLInputElement>) {
    e.currentTarget.select();
    document.execCommand('copy');
    // Можно сделать нотификацию, оставил алерт для простоты
    alert('Текст скопирован!');
  }
  // Не понял куда вставлять ссылку, сделал ссылку на название сервиса
  renderItems() {
    const { bonuses } = this.props;

    return bonuses.map((item, key) => {
      let promocodeTemplate;
      if (item.promocode) {
        promocodeTemplate = (
          <React.Fragment>
            <label className={styles.label}>
              <span className={styles.label__title}>Промокод</span>
              <input
                className={styles.input}
                type="text"
                readOnly={true}
                defaultValue={item.promocode}
                onClick={e => this.copyToClipboard(e)}
              />
            </label>
          </React.Fragment>
        );
      }

      return (
        <div key={key} className={styles.card}>
          <div className={styles.detail}>
            <h2 className={styles.title}>
              {item.link.length >= 1 ? (
                <a href={item.link} target="_blank" rel="nofollow, noopener">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h2>
            <p className={styles.descr}>{item.description}</p>
          </div>
          <div className={styles.promocode}>{promocodeTemplate}</div>
          <button className={styles.btn}>Получить бонус</button>
        </div>
      );
    });
  }

  render() {
    return <div className={styles.cardList}>{this.renderItems()}</div>;
  }
}

export default Card;

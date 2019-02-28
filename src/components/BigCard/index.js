import React from 'react';
import style from './style.css'

export default class BigCard extends React.Component {
  render() {
    return (
      <div className={style.card}>
        <div className={style["card-img"]} style={{backgroundImage:`url(${this.props.img})`}}/>
        <div className={style["card-body"]}>
          <div className={style["card-title"]}>{this.props.title}</div>
          <div className={style["card-time"]}>发售日期：{this.props.time}</div>
          <div className={style["card-position"]}>所在景点：{this.props.position}</div>
          <div className={style["card-price"]}>
            <span className={style["card-price-symbol"]}>¥</span>
            <span className={style["card-monery"]}>{this.props.monery}</span>
          </div>
        </div>

      </div>
    )
  }

}

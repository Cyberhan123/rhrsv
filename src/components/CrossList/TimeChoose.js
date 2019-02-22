import React from 'react';
export default class TimeChoose extends React.Component{
  render() {
    return(
      <div className="wrapper order-selector-wrapper">
        <div className="title">筛选:</div>
        <div className="selector-content">
          <ul className="order-list">
            <li className="first city-item active">全部时间
            </li>
            <li className="first city-item">本周
            </li>
            <li className="first city-item">本月
            </li>
            <li className="first city-item">三个月内
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

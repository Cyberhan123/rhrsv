import React from 'react';

export default class Place extends React.Component{
  render() {
    return(
      <div className="wrapper city-selector-wrapper">
        <div className="title">城市:</div>
        <div className="selector-content">
          <ul className="city-list">
            <li className="first city-item">全国</li>
            <li className="city-item active">
              上海
            </li>
            <li className="city-item">
              北京
            </li>
            <li className="city-item">
              广州
            </li>
            <li className="city-item">
              成都
            </li>
            <li className="city-item">
              深圳
            </li>
            <li className="city-item">
              武汉
            </li>
            <li className="city-item">
              沈阳
            </li>
            <li className="city-item">
              杭州
            </li>
            <li className="city-item">
              苏州
            </li>
            <li className="li-more"><span className="">更多城市</span>
              {/*<svg height="5" width="12" xmlns="http://www.w3.org/2000/svg" version="1.1" className="category_arrow">*/}
                {/*<path d="M0 0 L5 5 L10 0" stroke-width="1" stroke="#999" fill="none"></path>*/}
              {/*</svg>*/}
              </li>
          </ul>
        </div>
      </div>
    )
  }
}

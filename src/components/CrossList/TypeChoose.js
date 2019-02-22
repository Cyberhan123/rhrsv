import React from 'react';
export default class TypeChoose extends React.Component{
  render() {
    return(
      <div className="wrapper type-selector-wrapper">
        <div className="title type-title">类型:</div>
        <div className="selector-content">
          <ul className="type-list">
            <li className="current-type"><span className="active">全部类型
              </span></li>
            <li className="current-type"><span className="">演唱会
                        <span className="number-span">（26）</span></span></li>
            <li className="current-type"><span className="">其他展览
                        <span className="number-span">（15）</span></span></li>
            <li className="current-type"><span className="">音乐会
                        <span className="number-span">（8）</span></span></li>
            <li className="current-type"><span className="">动漫嘉年华
                        <span className="number-span">（6）</span></span></li>
            <li className="current-type"><span className="">舞台剧
                        <span className="number-span">（6）</span></span></li>
            <li className="li-more"><span className="">更多类型</span>
              {/*<svg height="5" width="12" xmlns="http://www.w3.org/2000/svg" version="1.1" className="category_arrow">*/}
                {/*<path d="M0 0 L5 5 L10 0" stroke-width="1" stroke="#999" fill="none"/>*/}
              {/*</svg>*/}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

import React from 'react';
import style from "./index.css";
import BaiduMap from "../../assets/images/contact-image-qrcode.png";

class contact extends React.Component {
  render() {
    return (
      <div className={style.holder}>
        <div className={style["table-cell"]}>
          <div className={style.container}>
            <div className={style.con}> </div>
            <div className={style.address}>
              哈尔滨市香坊区三大动力路23号<br/> 哈尔滨理工大学（东区）
              <br/> 0451-1234567
              <br/> 400-500-6789
              <img src={BaiduMap}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;

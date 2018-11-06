import styles from './index.css';

import React from 'react';
import { Carousel } from 'antd';
import img1 from './../assets/images/home/水文.jpg';
import img2 from './../assets/images/home/水文实景.jpg';
import img3 from './../assets/images/home/流域.jpg';
import img4 from './../assets/images/home/特色.jpg';

export default function() {
  return (
    <Carousel autoplay>
      <div><img src={img1} alt="" className={styles.imgsize}/>

        沿岸城镇介绍
        简要介绍沿岸的城镇，促进城镇经济发展，带动沿江地区发展。

        水系介绍
        流域内所有河流、湖泊等各种水体组成的水网系统，称作水系。其中，水流最终流入海洋的称作外流水系。

        沿岸特色商业
        松花江流域物业
        周边特色，盛产物资

        沿岸交通介绍
        气象环境介绍
        沿岸保护区介绍
        提供沿江地区保护区简述现状
      </div>
      <div><img src={img2} alt="" className={styles.imgsize}/>
        将每个地区的气象、流域的季节天气状况显示出来
      </div>
      <div><img src={img3} alt="" className={styles.imgsize}/>
        多车多终点的较优路线规划，智能引导，节省行车成本</div>
      <div><img src={img4} alt="" className={styles.imgsize}/>
        当地特产、当地盛产的物资。
      </div>
    </Carousel>
  );
}


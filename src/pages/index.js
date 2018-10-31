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
      <div><img src={img1} alt="" className={styles.imgsize}/></div>
      <div><img src={img2} alt="" className={styles.imgsize}/></div>
      <div><img src={img3} alt="" className={styles.imgsize}/></div>
      <div><img src={img4} alt="" className={styles.imgsize}/></div>
    </Carousel>
  );
}


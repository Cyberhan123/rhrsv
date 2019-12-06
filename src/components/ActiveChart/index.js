import React, { Component } from 'react';
import { MiniArea } from '../Charts';
import NumberInfo from '../NumberInfo';

import styles from './index.less';

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

function getActiveData() {
  const activeData = [];
  for (let i = 0; i < 24; i += 1) {
    activeData.push({
      x: `${fixedZero(i)}:00`,
      y: Math.floor(Math.random() * 1) + i * 5,
    });
  }
  return activeData;
}

export default class ActiveChart extends Component {
  state = {
    activeData: getActiveData(),
  };

  componentDidMount() {
    this.loopData();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.requestRef);
  }

  loopData = () => {
    this.requestRef = requestAnimationFrame(() => {
      this.timer = setTimeout(() => {
        this.setState(
          {
            activeData: getActiveData(),
          },
          () => {
            this.loopData();
          }
        );
      }, 1000);
    });
  };

  render() {
    const { activeData = [] } = this.state;

    return (
      <div className={styles.activeChart}>
        <NumberInfo subTitle="当前水文" total="河水温度测量" />
        <div style={{ marginTop: 32 }}>
          <MiniArea
            animate={false}
            line
            borderWidth={2}
            height={50}
            scale={{
              y: {
                tickCount: 3,
              },
            }}
            yAxis={{
              tickLine: false,
              label: false,
              title: false,
              line: false,
            }}
            data={activeData}
          />
        </div>
        {activeData && (
          <div>
            <div className={styles.activeChartGrid}>
              <p>{[...activeData].sort()[activeData.length - 1].y/100}摄氏度</p>
              <p>{[...activeData].sort()[Math.floor(activeData.length / 2)].y-75}摄氏度</p>
            </div>
            <div className={styles.dashedLine}>
              <div className={styles.line} />
            </div>
            <div className={styles.dashedLine}>
              <div className={styles.line} />
            </div>
          </div>
        )}
        {activeData && (
          <div className={styles.activeChartLegend}>
            <span>00:00</span>
            <span>{activeData[Math.floor(activeData.length / 2)].x}</span>
            <span>{activeData[activeData.length - 1].x}</span>
          </div>
        )}
      </div>
    );
  }
}

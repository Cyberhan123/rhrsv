import React, { PureComponent } from 'react';
//import { connect } from 'dva';
// import { formatMessage, FormattedMessage } from 'umi/locale';
import { Row, Col, Card, Tooltip } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import numeral from 'numeral';
//import GridContent from '@/components/PageHeaderWrapper/GridContent';

//import Authorized from '@/utils/Authorized';
import styles from './index.less';
import ditu from './../../assets/images/ditu.jpg'
import { Flex } from '_antd-mobile@2.3.1@antd-mobile';
import { hidden } from '_ansi-colors@3.2.4@ansi-colors';
// const { Secured } = Authorized;

const targetTime = new Date().getTime() + 3900000;

// use permission as a parameter
// const havePermissionAsync = new Promise(resolve => {
//   // Call resolve on behalf of passed
//   setTimeout(() => resolve(), 300);
// });

// @Secured(havePermissionAsync)
// @connect(({ monitor, loading }) => ({
//   monitor,
//   loading: loading.models.monitor,
// }))
class Monitor extends React.Component {
  componentDidMount() {
    console.log(BMap)
    var map = new BMap.Map("baiduditu");
    map.enableScrollWheelZoom(false);
    var point = new BMap.Point(126.63, 45.75);
    // 创建点坐标  
    map.centerAndZoom(point, 15);
    map.setMapStyleV2({
      styleId: '2e1739b9284c1ca0980ab81d93437d1d'
    })
    map.disableDoubleClickZoom();
    map.disableScrollWheelZoom();
    map.centerAndZoom(point, 12); // 初始化地图，设置中心点坐标和地图级别
   map.disableContinuousZoom();    // 开启连续缩放效果
   map.disableInertialDragging(); // 开启惯性拖拽效果
    // 初始化地图，设置中心点坐标和地图级别 
    // var MAX = 10;
    // var markers = [];
    // var pt = null;
    // var i = 0;
    // for (; i < MAX; i++) {
    //   pt = new BMap.Point(126.63 + Math.random() * 0.85, 45.75 + Math.random() * 0.30);
    //   markers.push(new BMap.Marker(pt));
    // }
    // //最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
    // var markerClusterer = new BMapLib.MarkerClusterer(map, { markers: markers });
  }
  handle = () => {
    const w = window.open('about:blank');
    w.location.href = "/../Unfold/index.html"
  }
  render() {
    const { monitor, loading } = this.props;
    // const { tags } = monitor;
    const tags = [];
    for (let i = 0; i < 50; i += 1) {
      tags.push({
        name: `TagClout-Title-${i}`,
        value: Math.floor((Math.random() * 50)) + 20,
      });
    }

    return (
      <div style={{
        minHeight: 1080, overflow: 'hidden',
      }} >
        <Row gutter={24}>
          <Col xl={18} lg={24} md={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title="实时动态显示 "
              bordered={false}
            >
              <Row>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle="今日商品成交"
                    suffix="元"
                    total={numeral(1245).format('0,0')}
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle="当地库存"
                    total="92%"
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle="统计时长"
                    total={<CountDown target={targetTime} />}
                  />
                </Col>
                <Col md={6} sm={12} xs={24}>
                  <NumberInfo
                    subTitle="平均时长"
                    suffix="元"
                    total={numeral(234).format('0,0')}
                  />
                </Col>
              </Row>
              <div className={styles.mapChart}>
                <Tooltip
                  title="卫星实景地图"
                >
                  <div className={styles.mapwarper}>


                    <div id="baiduditu" style={{ height: 500 }}></div>
                    <div className={styles.pointer} style={{ left: 500, top: 400 }} >
                      <a href="javascript:;" onClick={this.handle}></a>
                    </div>
                    <div className={styles.pointer} style={{ left: 460, top: 200 }} >
                      <a href="javascript:;" onClick={this.handle}></a>
                    </div>
                    <div className={styles.pointer} style={{ left: 660, top: 200 }} >
                      <a href="javascript:;" onClick={this.handle}></a>
                    </div>
                    <div className={styles.pointer} style={{ left: 660, top: 100 }} >
                      <a href="javascript:;" onClick={this.handle}></a>
                    </div>
                  </div>
                </Tooltip>
              </div>
            </Card>
          </Col>
          <Col xl={6} lg={24} md={24} sm={24} xs={24}>
            <Card
              title="动态关注"
              style={{ marginBottom: 24 }}
              bordered={false}
            >
              <ActiveChart />
            </Card>
            <Card
              title="空气质量"
              style={{ marginBottom: 24 }}
              bodyStyle={{ textAlign: 'center' }}
              bordered={false}
            >
              <Gauge
                title='Ratio'
                height={180}
                percent={87}
              />
            </Card>
          </Col>
        </Row>
        {/* <Row gutter={24}>
          <Col xl={12} lg={24} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title="Proportion Per Category"
              bordered={false}
              className={styles.pieCard}
            >
              <Row style={{ padding: '16px 0' }}>
                <Col span={8}>
                  <Pie
                    animate={false}
                    percent={28}
                    subTitle="Fast food"
                    total="28%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    animate={false}
                    color="#5DDECF"
                    percent={22}
                    subTitle="Western food"
                    total="22%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
                <Col span={8}>
                  <Pie
                    animate={false}
                    color="#2FC25B"
                    percent={32}
                    subTitle="Hot pot"
                    total="32%"
                    height={128}
                    lineWidth={2}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            {/* <Card
              title="Popular Searches"
              loading={loading}
              bordered={false}
              bodyStyle={{ overflow: 'hidden' }}
            >
              <TagCloud data={tags} height={161} />
            </Card> 
          </Col>
          <Col xl={6} lg={12} sm={24} xs={24} style={{ marginBottom: 24 }}>
            <Card
              title="Resource Surplus"
              bodyStyle={{ textAlign: 'center', fontSize: 0 }}
              bordered={false}
            >
              <WaterWave
                height={161}
                title="Fund Surplus"
                percent={34}
              />
            </Card>
          </Col>
        </Row>*/}
      </div>
    );
  }
}

export default Monitor;

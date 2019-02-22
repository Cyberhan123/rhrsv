import React from 'react'
import style from './index.css'
import CrossList from '@/components/CrossList';
import {Carousel, Pagination, Row, Col} from 'antd';

export default class Shop extends React.Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  onJump(pageNumber){
    console.log('Page: ', pageNumber);
  }
  render() {
    return (
      <div>
        <Carousel afterChange={this.onChange}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div>
          <CrossList/>
        </div>
        <Row>
          <Col span={12} offset={6}>
            <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={this.onJump} className={style.container}/>,
          </Col>
        </Row>

      </div>
    )
  }
}

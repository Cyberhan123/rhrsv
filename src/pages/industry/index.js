import React from 'react';
import {Card, Col, Row} from 'antd';


const {Meta} = Card;

class industry extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /></Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            > <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /></Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            > <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /></Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            > <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /></Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            > <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /></Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            > <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            /></Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default industry;

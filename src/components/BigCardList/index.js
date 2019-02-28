import React from 'react'
import BigCard from "../BigCard";
import {Row, Col} from 'antd';
import style from "./style.css"

export default class BigCardList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state={
      screenSize:window.screen.width,
    }
  }

  render() {
    var img = "https://src.hselfweb.cn/GoCyebrhan/img/cardtest.jpg";
    var Hdom =[
      <div>
      <Row>
        <Col span={2}/>
        <Col span={8}>
          <BigCard
            img={img}
            time={"2019-08-1"}
            title={"蒲公英的约定"}
            monery={"1111"}
            position={"香坊区"}
          />
          <BigCard
            img={img}
            time={"2019-08-1"}
            title={"蒲公英的约定"}
            monery={"1111"}
            position={"香坊区"}
          />
        </Col>
        <Col span={2}/>
        <Col span={8}> <BigCard
          img={img}
          time={"2019-08-1"}
          title={"蒲公英的约定"}
          monery={"1111"}
          position={"香坊区"}
        />
          <BigCard
            img={img}
            time={"2019-08-1"}
            title={"蒲公英的约定"}
            monery={"1111"}
            position={"香坊区"}
          />6</Col>
        <Col span={2}/>
      </Row>
      </div>];
    var sdom =[
      <div>
      <Row>
        <Col span={1}/>
        <Col span={22}>
          <BigCard
            img={img}
            time={"2019-08-1"}
            title={"蒲公英的约定"}
            monery={"1111"}
            position={"香坊区"}
          />
          <BigCard
            img={img}
            time={"2019-08-1"}
            title={"蒲公英的约定"}
            monery={"1111"}
            position={"香坊区"}
          />
        </Col>
        <Col span={1}/>
      </Row>
      </div>];
    window.onresize = ()=>{
      this.setState({
        screenSize:window.screen.width
      });
    };
    if (this.state.screenSize >= 1200)
      return Hdom;
    else
      return sdom;
  }
}

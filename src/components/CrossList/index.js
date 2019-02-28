import React from 'react';
import CommenCrossList from './CommenCrossList'

export default class CrossList extends React.Component{
  render() {
    var temp=[ '景点： ','道外江畔公园', '景阳广场', '景阳步行街', '源缘海洋世界'];
    return(
      <div style={{
        background: '#fff'
      }}>
        <CommenCrossList data={temp}/>
        <CommenCrossList data={temp}/>
        <CommenCrossList data={temp}/>
      </div>
      )

  }
}

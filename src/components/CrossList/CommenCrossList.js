import  React from  'react'
import style from './style.css'
export default class  CommenCrossList extends React.Component{
  render() {
 var data=this.props.data;
 console.log(data);
 var doms=[];
 data.forEach((elems,index)=>{
   doms.push(<li key={index} className={style.item}>{elems}</li>)
 });
    return(
      <div className={style["list-warper"]}>
        <ul className={style.list}>
          {doms}
        </ul>
      </div>
    )
  }

}

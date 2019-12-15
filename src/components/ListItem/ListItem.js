import React from 'react';
import './ListItem.css';
const ListItem = ({item}) => {

  const dataStyle = item.important ?'red':'#000';
  const decoration = item.important ? 'none': 'line-through'



  return(
    <li style={{color:dataStyle,textDecoration:decoration}}>
      {item.title}
      <button value="button" className="btn btn-danger"><i className="fa fa-remove"></i></button>
      <button value="button" className="btn btn-info"><i className="fa fa-check"></i></button>
    </li>
  )
}

export default ListItem

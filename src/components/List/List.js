import React from 'react';

import './List.css';
import ListItem from '../ListItem/ListItem';



const List = ({listData}) => {

  const listItemData = listData.map((data) => {
    return <ListItem item={data} key={data.id} />
  })

  return(
    <div>
      <h3>List</h3>
      <ul>
        {listItemData}
      </ul>
    </div>
  )
}


export default List;

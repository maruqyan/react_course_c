import React from 'react';

import Filter from '../Filter/Filter';
import List from '../List/List';
import AddItem from '../AddItem/AddItem';

import './App.css';

const arrData = [
  {
    id:1,
    title:'ToDo list 1',
    isDone:true,
    important:false
  },

  {
    id:2,
    title:'ToDo list 2',
    isDone:false,
    important:true
  },

  {
    id:3,
    title:'ToDo list 3',
    isDone:false,
    important:false
  },

  {
    id:4,
    title:'ToDo list 4',
    isDone:true,
    important:true
  }
]

const App = () => {
  return(
    <div className="container">
      <h1>ToDo List</h1>
      <Filter />
      <List listData={arrData} />
      <AddItem />
    </div>
  )
}

export default App;

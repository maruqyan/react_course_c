import React, { Component } from 'react';

import Header from '../Header';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';


export default class App extends Component{
  state = {
    todoData:[
      {
        id: 1,
        title: 'Սովորել React'
      },
      {
        id: 2,
        title: 'Կոֆե խմել'
      },
      {
        id: 3,
        title: 'Սովորել Node.js'
      },
      {
        id: 4,
        title: 'Հաց ուտել'
      }
    ]
  };

  onDeleteItem = (id) => {
    const { todoData } = this.state;
    const idx = todoData.findIndex((obj) => obj.id === id);
    todoData.splice(idx,1);
    this.setState(todoData);
  }
  render(){
    return (
      <div className="container">
        <Header />
        <Filter />
        <List todoList={this.state.todoData} onDeleteItem={this.onDeleteItem} />
        <AddItem />
      </div>
    );
  }
}

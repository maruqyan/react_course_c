import React from 'react';

import './Filter.css';

const Filter = () => {
  return(
    <>
      <h3>Search</h3>
        <input type ="text" placeholder="Serch your text" />
        <button value="button" className="btn btn-info">Search</button>
        <hr />
      <button value="button" className="btn btn-danger">Importat</button>
      <button value="button" className="btn btn-primary">Active</button>
    </>
  )
}

export default Filter;

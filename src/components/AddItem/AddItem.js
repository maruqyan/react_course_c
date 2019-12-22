import React from 'react';

import './AddItem.css';

const AddItem = () => {
  return (
    <div className="row add-item">
      <div className="form-group col-md-9">
        <textarea className="form-control" placeholder="Add new data"></textarea>
      </div>
      <div className="form-group col-md-3">
        <button className="btn btn-info btn-lg">Add Item</button>
      </div>
    </div>
  );
};

export default AddItem;
import React, { Component } from 'react';
import '../App.css';

class TableItem extends Component {
  render() {
    let newclassName = 'ImageItem';
    if (this.props.clicked) {
      newclassName += ' Fix-Image';
    }
    return (
      <>
        <tr>
          <th>
            <img className={newclassName} src={this.props.column.linkImg} />
          </th>
          <th>
            <img className={newclassName} src={this.props.column.linkImg} />
          </th>
          <th>
            <img className={newclassName} src={this.props.column.linkImg} />
          </th>
        </tr>
      </>
    );
  }
}

export default TableItem;

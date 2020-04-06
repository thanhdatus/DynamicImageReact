import React, { Component } from 'react';
import './App.css';
import TableItem from './components/TableItem';

class App extends Component {
  constructor() {
    super();
    this.linkImg = 'http://bit.ly/3ayPusa';
    this.isClicked = true;
  }
  render() {
    return (
      <div className='App'>
        <table>
          <TableItem column={this.linkImg} clicked={this.isClicked} />
          <TableItem column={this.linkImg} />
          <TableItem column={this.linkImg} />
          <TableItem column={this.linkImg} />
          <TableItem column={this.linkImg} />
          <TableItem column={this.linkImg} />
        </table>
      </div>
    );
  }
}

export default App;

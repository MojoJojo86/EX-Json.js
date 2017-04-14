import React, { Component } from 'react';
import { Table } from 'react-bootstrap';


import TableItem from './TableItem';

class DisplayTable extends Component {
  constructor() {
    super();
    this.state = {
      headers: [],
      size: ''
    }
  }
  render() {
    return(
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>header1</th>
            <th>header2</th>
            <th>header3</th>
            <th>header4</th>
          </tr>
        </thead>
        <tbody>
          {
            Object
              .keys(this.props.data)
              .map(key => <TableItem key={key} data={this.props.data[key]} />)
          }
        </tbody>
      </Table>
    );
  }
}

export default DisplayTable;

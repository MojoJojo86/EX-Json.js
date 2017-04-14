import React, { Component } from 'react';

class TableItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.ID}</td>
        <td>{this.props.data.Name}</td>
        <td>{this.props.data.HospNum}</td>
        <td>{this.props.data.TreatmentSite}</td>
      </tr>
    );
  }
}

export default TableItem;

import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import './index.css';


import DisplayTable from './Components/DisplayTable';
import Header from './Components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000")
      .then( (response) => {
        return response.json() })
          .then( (json) => {
            this.setState({data: json});
            console.log(this.state.data);
          });
  }

  render() {
    return (
      <div className="App">
        <Row className="show-grid">
          <Col xs={6} md={2}></Col>
          <Col xs={6} md={8}><Header /> <DisplayTable data={this.state.data} /></Col>
          <Col xsHidden md={2}></Col>
        </Row>
      </div>
    );
  }
}

export default App;

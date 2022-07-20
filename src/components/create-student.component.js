import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeMapName = this.onChangeMapName.bind(this);
    this.onChangeMapDescription = this.onChangeMapDescription.bind(this);
    this.onChangeMapLastupdated = this.onChangeMapLastupdated.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nameofmap: '',
      description: '',
      lastupdated: '',
      version: '',
    }
  }

  onChangeMapName(e) {
    this.setState({ nameofmap: e.target.value })
  }

  onChangeMapDescription(e) {
    this.setState({ description: e.target.value })
  }

  onChangeMapLastupdated(e) {
    this.setState({ lastupdated: e.target.value })
  }

  onChangeVersion(e) {
    this.setState({ version: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const mapObject = {
      nameofmap: this.state.nameofmap,
      description: this.state.description,
      lastupdated: this.state.lastupdated,
      version: this.state.version
    };
    axios.post('http://localhost:4000/liquidmaps/create-map', mapObject)
      .then(res => console.log(res.data));

    this.setState({ nameofmap: '', description: '', lastupdated: '', version: '' })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name of Map</Form.Label>
          <Form.Control type="text" value={this.state.nameofmap} onChange={this.onChangeMapName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeMapDescription} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Last Updated</Form.Label>
          <Form.Control type="text" value={this.state.lastupdated} onChange={this.onChangeMapLastupdated} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Version</Form.Label>
          <Form.Control type="text" value={this.state.version} onChange={this.onChangeVersion} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Maps
        </Button>
      </Form>
    </div>);
  }
}
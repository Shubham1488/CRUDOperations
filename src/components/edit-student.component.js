import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nameofmap: '',
      description: '',
      lastupdated: '',
      version: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/liquidmaps/edit-map/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nameofmap: res.data.nameofmap,
          description: res.data.description,
          lastupdated: res.data.lastupdated,
          version: res.data.version
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({ nameofmap: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ description: e.target.value })
  }

  onChangeStudentRollno(e) {
    this.setState({ lastupdated: e.target.value })
  }

  onChangeVersion(e) {
    this.setState({ version: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      nameofmap: this.state.nameofmap,
      description: this.state.description,
      lastupdated: this.state.lastupdated,
      version: this.state.version
    };

    axios.put('http://localhost:4000/liquidmaps/update-map/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Map successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/map-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name of Map</Form.Label>
          <Form.Control type="text" value={this.state.nameofmap} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Last Updated</Form.Label>
          <Form.Control type="text" value={this.state.lastupdated} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Version</Form.Label>
          <Form.Control type="text" value={this.state.version} onChange={this.onChangeVersion} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Map
        </Button>
      </Form>
    </div>);
  }
}
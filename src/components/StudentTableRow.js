import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props)
    this.deleteStudent = this.deleteStudent.bind(this)
  }

  deleteStudent() {
    axios
      .delete(
        'http://localhost:4000/liquidmaps/delete-map/' + this.props.obj._id,
      )
      .then((res) => {
        console.log('Map successfully deleted!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.nameofmap}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.lastupdated}</td>
        <td>{this.props.obj.version}</td>
        <td>
          <Link
            className="edit-link" path={"product/:id"}
            to={'/edit-map/' + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteStudent} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    )
  }
}

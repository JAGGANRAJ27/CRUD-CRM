import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap'
import axios from 'axios'
import './create.css'

export default class CreateClient extends Component {

    constructor(props){
        super(props)
         
        this.state = {
            name :'',
            email : '',
            clientid: '',
            mobileno:''
        }
    }

    onChangename = (event) =>
    {
        this.setState({name:event.target.value})
    }
    onChangeemail = (event) =>
    {
        this.setState({email:event.target.value})
    }
    onChangeid = (event) =>
    {
        this.setState({clientid:event.target.value})
    }
    onChangemobile = (event) =>
    {
        this.setState({mobileno:event.target.value})
    }
    onsubmit = (event) =>
    {
        event.preventDefault();
        const clientobj = {
            name : this.state.name,
            email : this.state.email,
            clientid : this.state.clientid,
            mobileno : this.state.mobileno
        }
        axios.post('http://localhost:2000/clienttest/createClient',clientobj)

        this.setState({
            name :'',
            email : '',
            clientid: '',
            mobileno:''
        })
    }
  render() {
    return (
      <div className='form'>
        <Form onSubmit={this.onsubmit} className=" m-5">
            <Form.Group controlId="Name">
                <Form.Label>Name:</Form.Label>
                <Form.Control type='text' required placeholder='Enter Client Name' value={this.state.name} onChange={this.onChangename} />
            </Form.Group>
            <Form.Group controlId="Email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' required placeholder='Enter Client Email' value={this.state.email} onChange={this.onChangeemail} />
            </Form.Group>
            <Form.Group controlId="ClientID">
                <Form.Label>Client ID:</Form.Label>
                <Form.Control type='text' required placeholder='Enter Client Id' value={this.state.clientid} onChange={this.onChangeid} />
            </Form.Group>
            <Form.Group controlId="mobile">
                <Form.Label>Mobile No:</Form.Label>
                <Form.Control type='Number' required placeholder='Enter Client Mobile No' value={this.state.mobileno} onChange={this.onChangemobile} />
            </Form.Group>
            <Button variant='warning' type='submit'  className='mt-3'>Create Client</Button>
        </Form>
      </div>
    )
  }
}

import React from 'react'
import {Form,Button} from 'react-bootstrap'

const CreateForm = (props) => {
  return (
    <div>
        <div className='form' style={{backgroundColor:'#7F7CAF'}}>
                <Form className=" m-5">
                    <Form.Group controlId="Name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type='text' placeholder='Enter Client Name' required/>
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type='email' placeholder='Enter Client Email' required />
                    </Form.Group>
                    <Form.Group controlId="ClientID">
                        <Form.Label>Client ID:</Form.Label>
                        <Form.Control type='text' placeholder='Enter Client Id' required/>
                    </Form.Group>
                    <Form.Group controlId="mobile">
                        <Form.Label>Mobile No:</Form.Label>
                        <Form.Control type='Number' placeholder='Enter Client Mobile No' required/>
                    </Form.Group>
                    <Button variant='success' type='submit' className='mt-3'>Update Client</Button>
                </Form>
            </div>
    </div>
  )
}

export default CreateForm;
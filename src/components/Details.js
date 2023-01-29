import React from "react";
import { Button,Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './list.css'

const Details = (props) => {
const { _id, name, email, clientid,mobileno } = props.obj;

const del = () => {
	axios.delete("http://localhost:2000/clienttest/deleteClient/" + _id).then((res) => {
		if (res.status === 200) {
		window.location.reload();
		} else Promise.reject();
	})
};

return (
	<Container className="d-flex justify-content-center text-center bg-info">
	<Card className="bg-dark text-white tab">
	<Card.Body>
	  <Card.Title>Name : {name}</Card.Title>
	  <Card.Subtitle className="mb-2 text-muted">Client id : {clientid}</Card.Subtitle>
	  <Card.Text>Mobile No : {mobileno}</Card.Text>
	  <Card.Text>Email: {email}</Card.Text>
	  <Link to={"/EditClient/" + _id}><Button variant="outline-warning">Update</Button></Link>
	  <Card.Link href=""><Button onClick={del} className='ms-3' variant="outline-danger">Delete</Button></Card.Link>
	</Card.Body>
  </Card>
  </Container>
);
};

export default Details;

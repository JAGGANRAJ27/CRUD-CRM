import React, { useState, useEffect } from "react";
import axios from "axios";
import {Container} from 'react-bootstrap'
import Details from './Details'

const ClientList= () => {
const [clients, setCllients] = useState([]);

useEffect(() => {
	axios.get("http://localhost:2000/clienttest/").then(({ data }) => {
		setCllients(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return clients.map((res, i) => {
	return <Details obj={res} key={i} />;
	});
};

return (
	<div>
        <Container className='sm-3'>
            {DataTable()}
        </Container>
      </div>
);
};

export default ClientList;

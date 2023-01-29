import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
//import {Form,Button} from 'react-bootstrap'

const EditClient = (props) => {

	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		clientid: "",
		mobileno: "",
	});
	const onSubmit = (clientobj) => {
		axios.put("http://localhost:2000/clienttest/updateClient/" + props.match.params.id, clientobj)
			.then((res) => {
				if (res.status === 200) {
					alert("successfully updated");
					props.history.push("/ClientList");
				} else Promise.reject();
			})
			.catch((err) => alert("Something went wrong...."));
	};
	
	useEffect(() => {
		axios.get("http://localhost:2000/clienttest/updateClient/" + props.match.params.id,).then((res) => {
			const {name,email,clientid,mobileno} = res.data;
			console.table(res.data)
			setFormValues({ name, email, clientid, mobileno });
		})
		.catch((err) => console.log(err));
	},[]);
	return (
		<CreateForm
		initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
	  >
		</CreateForm>
	);
};

export default EditClient;

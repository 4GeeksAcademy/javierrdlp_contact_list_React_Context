import React, { useEffect, useState, useContext } from 'react';
import rigoImage from "../../img/rigo-baby.jpg";
import {Context} from "../store/appContext"

import "../../styles/home.css";

import { Link } from "react-router-dom";
import LiContactCard from "../component/LiContactCard"

export const Home = () => {

	const [contactList, setContactList] = useState([])
	const {store, actions} = useContext(Context)
	/*
	const getContacts = () => {
		fetch("https://playground.4geeks.com/contact/agendas/javierR/contacts")
		.then((response) => {
			console.log(response)
				return response.json()
		})
		.then((data) => {
			console.log(data)			
			setContactList(data.contacts)
		})
		.catch((err) => console.error("Error fetching contacts:", err))
	}

	useEffect(() => {getContacts()},[]);
*/

	return (
		<div className="text-center mt-5">
			<h1 className="display-1 text-primary mb-5">
				Contact List
				<i className="bi bi-person-lines-fill ms-5 "></i>
			</h1>
			<Link to="/new-contact">
				<button className="btn btn-primary mb-5">
					<i class="bi bi-person-plus-fill me-2"></i>
					Add contact
				</button>
			</Link>

			<ul class="list-group">
				{					
					store.contacts.map((value) =>(
						<LiContactCard key={value.id} name={value.name} phone={value.phone} email={value.email} address={value.address} id={value.id}/>
					))
				}
			</ul>			
		</div>
	)
};

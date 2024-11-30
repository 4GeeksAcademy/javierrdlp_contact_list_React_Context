import React, { useEffect, useState } from 'react';
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/home.css";

import { Link } from "react-router-dom";
import LiContactCard from "../component/LiContactCard"

export const Home = () => {

	const [contactList, setContactList] = useState([])

	const getContacts = () => {
		fetch("https://playground.4geeks.com/contact/agendas/javierR/contacts")
		.then((response) => {
			console.log(response)
				return response.json()
		})
		.then((data) => {
			console.log(data)
			const contactsArray = [];
			data.contacts.forEach(element => {
				console.log(element)
				contactsArray.push({
					name: element.name,
					phone: element.phone,
					email: element.email,
					address: element.address,
					id: element.id
				})				
			});
			setContactList(contactsArray)
		})
		.catch((err) => console.error("Error fetching contacts:", err))
	}

	useEffect(() => {getContacts()},[]);

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
					contactList.map((value) =>(
						<LiContactCard key={value.id} name={value.name} phone={value.phone} email={value.email} address={value.address} id={value.id} getContacts= {getContacts}/>
					))
				}
			</ul>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	)
};

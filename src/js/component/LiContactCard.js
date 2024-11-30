import React, { useState } from 'react';
import contact from "../../img/contact.png"

const LiContactCard = ({name, phone, email, address, id, getContacts}) => {

    async function deleteContact(contactId){

        await fetch("https://playground.4geeks.com/contact/agendas/javierR/contacts/" + contactId,{
			method: "DELETE",			
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			return response.json()
		})
		.then((data) => {           
            console.log(data)            
        })
		.catch((err) => {err})

        getContacts()

    }   

    return (
        <li>
            <div className="row ">
                <div className="col-3"></div>
                <div className="col-6 text-center">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-3 mt-3">
                                <img
                                    id="imgContact"
                                    src={contact}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body text-start">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text mb-0">
                                        <i className="bi bi-geo-alt-fill me-1"></i>
                                        {address}
                                    </p>
                                    <p className="card-text mb-0">
                                        <small className="text-body-secondary">
                                            <i class="bi bi-telephone-fill me-1"></i>
                                            {phone}
                                        </small>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">
                                            <i class="bi bi-envelope-fill me-1"></i>
                                            {email}
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <i class="bi bi-pencil-fill me-5"></i>
                                <button className='btn' onClick={
                                   () => deleteContact(id)                                   
                                }>
                                <i class="bi bi-trash-fill" ></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </li>
    )
}

export default LiContactCard
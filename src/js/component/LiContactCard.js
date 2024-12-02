import React, { useEffect, useState } from 'react';
import contact from "../../img/contact.png"
import { Link } from "react-router-dom";

const LiContactCard = ({ name, phone, email, address, id, getContacts }) => {

    async function deleteContact(contactId) {
        console.log("line 8 " + contactId);
        
        await fetch(`https://playground.4geeks.com/contact/agendas/javierR/contacts/${contactId}`, {
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
            .catch((err) => { err })        
            getContacts()
    }

    useEffect(() =>{
        
    }, [])

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
                                    <h5 className="card-title">{name} {id}</h5>
                                    <p className="card-text mb-0 text-secondary">
                                        <i className="bi bi-geo-alt-fill me-1"></i>
                                        {address}
                                    </p>
                                    <p className="card-text mb-0 text-secondary">
                                        <small className="text-body-secondary">
                                            <i className="bi bi-telephone-fill me-1"></i>
                                            {phone}
                                        </small>
                                    </p>
                                    <p className="card-text text-secondary">
                                        <small className="text-body-secondary">
                                            <i className="bi bi-envelope-fill me-1"></i>
                                            {email}
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 mt-3">
                                <Link to={`/edit-contact/${id}`}>
                                <i className="bi bi-pencil-fill me-5"></i>
                                </Link>  
                                < i className="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target={`#deleteModal${id}`}></i > 
                                <div className="modal" id={`deleteModal${id}`} tabindex="-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Are you sure?</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>If you delete this contact, it desappear for ever!</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                                                <button type="button" className="btn btn-primary" onClick={
                                                    () => {
                                                        console.log(id);                                                        
                                                        deleteContact(id)}
                                                } data-bs-dismiss="modal">Yes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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


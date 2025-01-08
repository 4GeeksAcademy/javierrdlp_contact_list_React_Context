import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext"

const EditContact = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const [editedContact, setEditedContact] = useState({})

    useEffect(() => {
        const contact = store.contacts.filter((e) => String(e.id) === params.idContact)[0];        
        setEditedContact(contact);         
    }, []);

    return (
        <div className='container text-center mt-5 d-flex justify-content-center flex-column'>
            <h1 className='display-5 text-primary mb-5'>Contact ID: {params.idContact}</h1>
            <form className='text-start'>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold" >Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name" value={editedContact.name} onChange={(e) => {
                        setEditedContact((prevContact) => ({
                            ...prevContact,
                            name: e.target.value 
                        }));
                    }} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" value={editedContact.address} onChange={(e) => {
                        setEditedContact((prevContact) => ({
                            ...prevContact,
                            address: e.target.value
                        }));
                    }} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email" value={editedContact.email} onChange={(e) => {
                        setEditedContact((prevContact) => ({
                            ...prevContact,
                            email: e.target.value
                        }));
                    }} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter phone" value={editedContact.phone} onChange={(e) => {
                        setEditedContact((prevContact) => ({
                            ...prevContact,
                            phone: e.target.value 
                        }));
                    }}/>
                </div>
                <button type="submit" className="btn btn-primary mb-1 col-12" onClick={
                    () =>{
                    actions.editContact(params.idContact, editedContact, navigate)
                    }
                }>Edit</button>
                <Link to="/">
                    <p id="emailHelp" className="text">or get back to contacts</p>                    
                </Link>
            </form>
        </div>
    )
}

export default EditContact
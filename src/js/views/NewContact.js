import React, { useEffect, useState, useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import {Context} from "../store/appContext"


const NewContact = () => {

    const navigate = useNavigate();
    const {store, actions} = useContext(Context)

    const [newContact, setNewContact] = useState(
        {
            name: "",
            phone: "",
            email: "",
            address: ""
        })

    function postContact(contact) {

        let data = {
            "name": contact.name,
            "phone": contact.phone,
            "email": contact.email,
            "address": contact.address
        }

        fetch("https://playground.4geeks.com/contact/agendas/javierR/contacts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                
                return response.json()
            })
            .then((data) => {
                console.log(data)
                actions.getContacts()
                

            })
            .catch((err) => { err })
            
            navigate("/")
    };


    return (
        <div className='container text-center mt-5 d-flex justify-content-center flex-column'>
            <h1 className='display-5 text-primary mb-5'>Add a New Contact</h1>
            <form className='text-start'>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold" >Full Name</label>
                    <input type="text" className="form-control" id="inputName" placeholder="Full Name" onChange={
                        (e) => {
                            setNewContact((contact) => ({
                                ...contact,
                                name: e.target.value
                            }))
                        }
                    } />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter address" onChange={
                        (e) => {
                            setNewContact((contact) => ({
                                ...contact,
                                address: e.target.value
                            }))
                        }
                    } />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter Email" onChange={
                        (e) => {
                            setNewContact((contact) => ({
                                ...contact,
                                email: e.target.value
                            }))
                        }
                    } />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label fw-bold">Phone</label>
                    <input type="text" className="form-control" id="inputPhone" placeholder="Enter phone" onChange={
                        (e) => {
                            setNewContact((contact) => ({
                                ...contact,
                                phone: e.target.value
                            }))
                        }
                    } />
                </div>

                <button type="submit" className="btn btn-primary mb-1 col-12" onClick={() =>{
                    if(newContact.name == ""){
                    }
                    else{
                     postContact(newContact, navigate)
                    }
                }}>Save</button>
                <Link to="/">
                    <p id="emailHelp" className="text">or get back to contacts</p>
                </Link>
            </form>
        </div>
    )
}

export default NewContact
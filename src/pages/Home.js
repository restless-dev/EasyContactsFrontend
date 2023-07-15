import React, { useState, useEffect } from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faUserSlash, faUsersGear } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [contacts, setContacts] = useState([]);

    const { id } = useParams();

    useEffect(() =>{
        loadContacts();
    },[])

    const loadContacts = async () => {
        const result = await axios.get("http://localhost:8080/contacts");
        setContacts(result.data);
    }

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:8080/contact/${id}`);
        loadContacts();
    }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table table-dark main-table">
                <thead>
                    <tr className="all-col">
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">
                        <FontAwesomeIcon icon={faUsersGear} className="head-icon" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => {
                        return(
                            <tr className="contact-table">
                            <th scope="row" key={index}>{index+1}</th>
                            <td className="table-text">{contact.name}</td>
                            <td className="table-text">{contact.number}</td>
                            <td className="table-text">{contact.email}</td>
                            <td className="all-btn">
                                <Link className="btn btn-primary mx-2 view-btn" to={`/view-contact/${contact.id}`}>
                                <FontAwesomeIcon icon={faAddressCard} className="mx-1 table-icons" />
                                View
                                </Link>
                                <Link className="btn btn-outline-primary mx-2 edit-btn" to={`/edit-contact/${contact.id}`}>
                                <FontAwesomeIcon icon={faUserPen} className="mx-1 table-icons" />
                                Edit
                                </Link>
                                <button className="btn btn-danger mx-2 delete-btn" onClick={() => deleteContact(contact.id)}>
                                <FontAwesomeIcon icon={faUserSlash} className="mx-1 table-icons" />
                                Delete
                                </button>
                            </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>         
        </div>
    </div>
  )
}

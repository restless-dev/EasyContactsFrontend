import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';


export default function ViewContact() {

    const [contact, setContact] = useState({
        name:"",
        number:"",
        email:""
    })

    const {id} = useParams();
    useEffect(() => {
        loadContact()
    },[])

    const loadContact = async () => {
        const result = await axios.get(`http://localhost:8080/contact/${id}`)
        setContact(result.data)
    }

  return (
    <div className='container'>
      <div className='row view-row'>
        <div className='col-md-6 offset-md-3 p-4 mt-5 main-div'>
          <h2 className='text-center m-4'>
            <FontAwesomeIcon icon={faCircleUser} className="title-icon" />
          </h2>
            <div className='card'>
                <div className='card-header'>
                    <span className='card-title'>Here's your contact information:</span>
                    <ul className='list-group list-group-flush info-div'>
                        <li className='list-group-item name-text text-conf'>
                            <b>Name: </b>
                            {contact.name}
                        </li>
                        <li className='list-group-item number-text text-conf'>
                            <b>Number: </b>
                            {contact.number}
                        </li>
                        <li className='list-group-item email-div text-conf'>
                            <b>Email: </b>
                            {contact.email}
                        </li>
                    </ul>
                </div>
            </div>
            <Link className='btn btn-outline-light back-btn' to={"/"}>Go back</Link>
        </div>
      </div>
    </div>
  )
}

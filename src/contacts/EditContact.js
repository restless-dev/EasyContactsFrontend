import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditContact() {

  let navigate = useNavigate();

  const {id} = useParams();

  const [contact, setContact] = useState({
    name:"",
    number:"",
    email:""
  })

  const{name, number, email} = contact
  const onInputChange = (e) => {
    setContact({...contact,[e.target.name]:e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/contact/${id}`, contact);
    navigate("/");
  };

  const loadContact = async () => {
    const result = await axios.get(`http://localhost:8080/contact/${id}`);
    setContact(result.data);
  };

  useEffect(() => {
    loadContact();
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 p-4 mt-5 main-div'>
          <h2 className='text-center m-4 main-title'>Edit a existing contact</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Name' className='form-label'>
                Name
              </label>
              <input
              type={'text'}
              className='form-control'
              placeholder='Enter the new name of the contact'
              name='name'
              value={name}
              onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Number' className='form-label'>
                Number
              </label>
              <input
              type={'text'}
              className='form-control'
              placeholder='Enter the new number of the contact'
              name='number'
              value={number}
              onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                Email
              </label>
              <input
              type={'text'}
              className='form-control'
              placeholder='Enter the new email of the contact'
              name='email'
              value={email}
              onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='subtmit' className='btn btn-outline-primary submit-btn'>Save Changes</button>
            <Link className='btn btn-outline-danger mx-2 cancel-btn' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

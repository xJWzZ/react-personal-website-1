import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../../../utils/constants';

function RegisterNewPersonForm(props) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    motherID: '',
    fatherID: '',
    address: '',
    info: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
      console.log("Sending form data: " + formData.data)
      const response = await axios.post(API_BASE_URL + 'person/register', formData, {withCredentials: true});
      console.log('POST request successful:', response.data);
    } catch (error) {
      console.error('POST request error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="motherID">Mother's ID:</label>
        <input
          type="text"
          id="motherID"
          name="motherID"
          value={formData.motherID}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="fatherID">Father's ID:</label>
        <input
          type="text"
          id="fatherID"
          name="fatherID"
          value={formData.fatherID}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="info">Information:</label>
        <textarea
          id="info"
          name="info"
          value={formData.additionalInfo}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className='familyTreeButton'>Register Family Member</button>
    </form>
  )
}

RegisterNewPersonForm.propTypes = {}

export default RegisterNewPersonForm

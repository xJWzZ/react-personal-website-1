import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../../utils/constants';

function TestPersonSearch() {
  const [textInput, setTextInput] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Replace with your actual API endpoint and data submission logic
      const response = await sendDataToApi(textInput);

      // Update the result state with the API response
      setResult(response.data.firstName);
      console.log(response.data);
    } catch (error) {
      setResult(error.message);
    }
  };

  const sendDataToApi = async (data) => {
  try {
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    const response = await axios.get(API_BASE_URL + 'person/findperson' + `?personID=${data}`, {withCredentials: true});
    console.log('GET request successful:', response.data.response_message);
    return response // Update the result state here
  } catch (error) {
    console.error('GET request error:', error);
    throw error
  }
};


  return (
    <div>
      <h1>API Request Form</h1>
      <form onSubmit={handleSearch}>
        <label>
          Enter Text:
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type something..."
            required
          />
        </label>
        <button type="submit" className='	familyTreeButton'>Submit</button>
      </form>
      <div>
        <p>Result: {result}</p>
      
      </div>
    </div>
  )
}

export default TestPersonSearch
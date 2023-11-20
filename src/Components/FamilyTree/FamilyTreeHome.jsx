import React, { useEffect, useState } from 'react';
import { API_BASE_URL, MOCK_API } from '../../utils/constants';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { mockAllPersonData } from '../../data/mockPersonData';
import FamilyTree from './FamilyTree/FamilyTree';

function FamilyTreeHome() {

  const useMock = MOCK_API;
  const [data, setData] = useState([]);
  const FIND_ALL_PERSONS_API = API_BASE_URL + 'person/findallpersons';

  useEffect(() => {
    const mock = new MockAdapter(axios);
    console.log("useEffect being used");

    if (useMock) {
      setData([...mockAllPersonData]);
      console.log(typeof data);
    } else {
      const response = sendDataToApi(data);
      setData(response.data);
    }
  }, [])

  const sendDataToApi = (data) => {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
      axios.get(FIND_ALL_PERSONS_API, {withCredentials: true}).then((response) => {setData(response.data)});
    } catch (error) {
      console.error('GET request error:', error);
      throw error
    }
  }

  return (
    <div style={{width: "100%"}}>    
    <FamilyTree></FamilyTree>
    </div>
  )
}

export default FamilyTreeHome
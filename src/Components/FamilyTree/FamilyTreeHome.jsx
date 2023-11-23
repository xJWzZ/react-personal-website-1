import React, { useEffect, useState } from 'react';
import { API_BASE_URL, MOCK_API } from '../../utils/constants';
import axios from 'axios';
import FamilyTree from './FamilyTree/FamilyTree';
import transformInputData, { DEFAULT_SOURCE } from './const'

function FamilyTreeHome() {

  const useMock = MOCK_API;
  const [nodes, setNodes] = useState(DEFAULT_SOURCE);
  const FIND_ALL_PERSONS_API = API_BASE_URL + 'person/findallpersons';

  useEffect(() => {
    if (useMock) {
      setNodes(DEFAULT_SOURCE);
    } else {
      populateFamilyTree();
    }
  }, [])

  const populateFamilyTree = () => {
    try {
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
      const response =  axios.get(FIND_ALL_PERSONS_API, {withCredentials: true}).then((response) => {
        setNodes(transformInputData(response.data));
        console.log(response);
      });    
    } catch (error) {
      console.error('GET request error:', error);
      throw error
    }
  }

  return (
    <div style={{width: "100%"}}>    
    <FamilyTree nodes={nodes}></FamilyTree>
    </div>
  )
}

export default FamilyTreeHome
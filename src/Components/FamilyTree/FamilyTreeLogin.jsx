
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FamilyTreeHome from './FamilyTreeHome';
import '../../Styles/FamilyTreeLogin.css';
import { API_BASE_URL } from '../../utils/constants';

function FamilyTreeLogin(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => {
      // Check if the user has a valid token when the component mounts
      const token = localStorage.getItem('token');
      if (token) {
        // Make a request to your backend to check the token's validity
        axios
          .get(API_BASE_URL + 'auth/refresh-token', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            // Token is valid, so user remains logged in
            setLoggedIn(true);
          })
          .catch((error) => {
            console.error('Token validation failed:', error);
            // Token is invalid, so log the user out
            handleLogout();
          });
      }
    }, []);
  
    const handleLogin = async () => {
      try {
        const response = await axios.post(API_BASE_URL + 'auth/authenticate', {
          email,
          password,
        });
  
        const { access_token, refresh_token } = response.data;
        localStorage.setItem('token', access_token);
        setLoggedIn(true);
      } catch (error) {
        console.error('Login failed:', error);
        setError('Incorrect email / password')
      }
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setLoggedIn(false);
    };
  
    return (
      <div className='card'>
        {isLoggedIn ? (
          <div>
            <FamilyTreeHome></FamilyTreeHome>
            <button className='familyTreeButton' onClick={handleLogout}>Logout</button>
          </div>
         ) : (
          <div>
            <h1>Family Tree Login</h1>
            <p>My passion project. An interactive family tree editor.</p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='familyTreeButton' onClick={handleLogin}>Login</button>
            {error ? (<div className='warning'>{error}</div>) : (<div></div>)}
            
          </div>
        )} 
      </div>
    );

    
}

FamilyTreeLogin.propTypes = {}

export default FamilyTreeLogin

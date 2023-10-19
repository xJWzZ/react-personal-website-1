import './Styles/App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import WorkExperience from './Pages/WorkExperience';
import Hobbies from './Pages/Hobbies';
import Footer from './Components/Footer';
import Guidewire from './Pages/Guidewire';
import OverC from './Pages/OverC';
import Caddy from './Pages/Caddy';
import Musician from './Pages/Musician';
import Blog from './Pages/Blog';
import Email from './Pages/Email';
import WebsiteBlog from './Pages/WebsiteBlog';
import { StrictMode } from 'react';

function App() {
  return (
    <>
    <StrictMode>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/workexperience' Component={WorkExperience}/>
          <Route path='/hobbies' Component={Hobbies}/>
          <Route path='/details/1' Component={Guidewire}/>
          <Route path='/details/2' Component={OverC}/>
          <Route path='/details/3' Component={Caddy}/>
          <Route path='/details/4' Component={Musician}/>
          <Route path='/blog' Component={Blog}/>
          <Route path='/email' Component={Email}/>
          <Route path='/blogdetails/1' Component={WebsiteBlog}/>
          <Route path='/github' Component={() => {
            window.location.href = 'https://github.com/xJWzZ/react-personal-website-1';
            return null
          }}/>
        </Routes>
        <Footer></Footer>
      </Router> 
      </StrictMode>
    </>
  );
}

export default App;

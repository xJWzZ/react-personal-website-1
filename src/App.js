import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import WorkExperience from './Pages/WorkExperience';
import Hobbies from './Pages/Hobbies';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/workexperience' Component={WorkExperience}/>
          <Route path='/hobbies' Component={Hobbies}/>
        </Routes>
      </Router> 
    </>
  );
}

export default App;

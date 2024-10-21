import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import MobileNav from './Components/MobileNav/MobileNav'; // Ensure this doesn't contain a <Router>
import NotFound from './Components/NotFound/NotFound'; // Ensure this doesn't contain a <Router>
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'; // Ensure this doesn't contain a <Router>
import Login from './Components/Login/Login'; // Ensure this doesn't contain a <Router>
import HotelListPage from './Pages/HotelListPage';
import { useEffect } from 'react';
import api, { setAuthToken } from './helpers/apiService';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import CreateHotel from './Components/CreateHotel/CreateHotel';
import UpdateHotel from './Components/UpdateHotel/UpdateHotel';
import Profile from './Components/Profile/Profile';
import CryptoJS from 'crypto-js'
import Hotels from './Components/Hotels';
import Hotels1 from './Components/Hotels1'; 

function App() {
 



  useEffect(() => {
    // Step 1: Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Step 2: Set the token in axios headers if it exists
      setAuthToken(token);
    }
  }, []);
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="/HotelListPage" element={<HotelListPage />} />
          <Route path="/CreateHotel" element={<CreateHotel />} />
          <Route path="/UpdateHotel/:id" element={<UpdateHotel />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/Hotels1" element={<Hotels1 />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

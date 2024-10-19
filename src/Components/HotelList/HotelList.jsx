import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api, { setAuthToken } from '../../helpers/apiService';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import CreateHotel from '../CreateHotel/CreateHotel';
import './HotelList.css';
import logo from '../../img/Logo.png'
import { useHistory } from 'react-router-dom';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import Footer from '../Footer/Footer';
import ReactPaginate from 'react-paginate';


const HotelList = () => {
  const  id  = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalHotels, setTotalHotels] = useState(0);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); // State for delete confirmation modal
  const [hotelToDelete, setHotelToDelete] = useState(null); // Store the hotel to delete
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false); // State for update modal
  const [hotelToUpdate, setHotelToUpdate] = useState(null); // Store the hotel to update
  const [updatedHotel, setUpdatedHotel] = useState({}); // State for updated hotel details
  const [isUpdating, setIsUpdating] = useState(false);


  // 
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4; // Adjust based on your needs

  // Function to handle card click
  const handleCardClick = (id) => {
    navigate(`/hotel/${id}`);
  };
  const navigate = useNavigate();
  const handleCreateHotelClick = () => {
    navigate('/CreateHotel'); // Redirect to Create Hotel page
  };

  //   const handleUpdateButtonClick = (hotel) => {
  //     setHotelToUpdate(hotel);
  //     setIsUpdating(true);
  // };

  const fetchItems = async () => {
    const token = localStorage.getItem('token');
    setAuthToken(token);

    try {
      const response = await api.get('https://hoteltest-six.vercel.app/hotel/?action=getHotel');
      setItems(response.data.data);
      setTotalHotels(response.data.data.length); // Set the total hotels

    } catch (error) {
      console.error('Failed to fetch items', error);
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access here, if needed
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  // useEffect(async () => {
  //   const response = await axios.get('https://hoteltest-six.vercel.app/hotel/?action=getHotel');

  //   setHotelData(response.data)
  // }, [])
  // const LastPostIndex = currentPage * postPerPage;
  // const FirstPostIndex = LastPostIndex - postPerPage;
  // const currentPost = hotelData.slice(FirstPostIndex, LastPostIndex)

  // Handle page change
  //  const handlePageChange = (selectedPage) => {
  //   setCurrentPage(selectedPage.selected);
  // };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // add hotel usestate
  // const addHotel = (newHotel) => {
  //   console.log('New hotel added:', newHotel);
  //   setHotels((prevHotels) => [...prevHotels, newHotel]);
  //   setTotalHotels((prevCount) => prevCount + 1);
  //   setModalOpen(false); // Close modal after adding hotel
  // };

  // // Delete hotel function
  // const deleteHotel = async (id) => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Please log in first');
  //     return;
  //   }

  //   try {
  //     await api.delete('https://hoteltest-six.vercel.app/hotel/', {
  //       data: {
  //         action: "delHotel",
  //         id: id
  //       },
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     setItems((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id));
  //     setTotalHotels((prevCount) => prevCount - 1); // Decrement totalHotels when a hotel is deleted
  //     setDeleteModalOpen(false);
  //   } catch (error) {
  //     console.error('Error deleting hotel:', error);
  //     alert('Failed to delete the hotel. Please check the console for more details.');
  //   }
  // };

  // // Update hotel function
  // const updateHotel = async () => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     alert('Please log in first');
  //     return;
  //   }

  //   try {
  //     await api.patch('https://hoteltest-six.vercel.app/hotel/', {
  //       action: "patchHotel",
  //       ...updatedHotel,
  //       id: hotelToUpdate.id
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });

  //     // Update the hotel in the state
  //     setItems((prevHotels) =>
  //       prevHotels.map((hotel) =>
  //         hotel.id === hotelToUpdate.id ? { ...hotel, ...updatedHotel } : hotel
  //       )
  //     );

  //     setUpdateModalOpen(false);
  //   } catch (error) {
  //     console.error('Error updating hotel:', error);
  //     alert('Failed to update the hotel. Please check the console for more details.');
  //   }
  // };

  //

  return (
    <div>
      <Nav />
      <MobileNav />


      <h2 className="text-center mt-5">Hotel List</h2>
      <hr className='w-50 mx-auto' />

      <div className="d-flex justify-content-end align-items-center m-3 mx-5">
        <Button variant="primary" type="submit" className="mx-3  btnBg rounded p-2" onClick={handleCreateHotelClick}>
          Create Hotel
        </Button>
        <p className="border border-danger p-2 m-0 rounded">Total Hotels: {totalHotels}</p> {/* Updated class for styling */}
      </div>


      {/* Hotel Cards */}
      <div className="hotel-list-container d-flex flex-wrap justify-content-center m-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="hotel-card rounded-sm position-relative"
              onClick={() => handleCardClick(item.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="hotel-image-wrapper">
                <img src={item.profile_image} alt={item.name} className="hotel-image" loading="lazy" />
              </div>
              <div className="hotel-details text-start ">
                <h5 className="hotel-name">Name : {item.name}</h5>
                <p className="hotel-city">City : {item.city}</p>
                <p className="hotel-city">Phone : {item.phone}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-hotels-message">No hotels available.
            <Link to='/'>Login to See List</Link></p>

        )}
      </div>
      {/* Hotel Cards Ends */}


      <Footer />


    </div>
  );
};

export default HotelList;

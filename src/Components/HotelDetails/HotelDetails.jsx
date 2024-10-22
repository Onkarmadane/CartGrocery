import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import api from '../../helpers/apiService'; // Import your API service
import UpdateHotel from '../UpdateHotel/UpdateHotel';
import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import Footer from '../Footer/Footer';
import Button from '../Button/Button'
import './HotelDetails.css'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const HotelDetails = () => {
  const { id } = useParams(); // Get hotel ID from URL
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]); // Your hotel items state
  const [isUpdating, setIsUpdating] = useState(false);
  const [hotelToUpdate, setHotelToUpdate] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); // State for delete confirmation modal
  const [hotelToDelete, setHotelToDelete] = useState(null); // Store the hotel to delete
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false); // State for update modal
  const [hotels, setHotels] = useState([]);
  const [totalHotels, setTotalHotels] = useState(0);
  const navigate = useNavigate();

  const handleUpdateClick = (id) => {
    navigate(`/UpdateHotel/${id}`); // Navigate to the Update Hotel page with the hotel ID
  };

// to add tooltop for website
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {hotel.website_link}
    </Tooltip>
  );

  // Function to delete a hotel
  const deleteHotel = async (id) => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    if (!token) {
      alert('Please log in first');
      return;
    }

    const payload = {
      action: "delHotel",
      id: id, // The ID of the hotel to delete
    };

    try {
      await api.delete(`https://hoteltest-six.vercel.app/hotel/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: payload, // Include the payload in the request
      });

      // Update the state after successful deletion
      setItems((prevHotels) => prevHotels.filter((hotel) => hotel.id !== id));
      setTotalHotels((prevCount) => prevCount - 1); // Decrement totalHotels when a hotel is deleted
      alert('Hotel deleted successfully!');
      navigate("/HotelListPage")
    } catch (error) {
      console.error('Error deleting hotel:', error);
      alert('Failed to delete the hotel. Please check the console for more details.');
    }
  };

  // Function to handle the delete button click
  const handleDeleteClick = (hotelId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this hotel?");
    if (confirmDelete) {
      deleteHotel(hotelId); // Call delete function if confirmed
    }
  };

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await api.get(`https://hoteltest-six.vercel.app/hotel/?action=getHotel&id=${id}`);
        setHotel(response.data.data);
      } catch (error) {
        console.error('Failed to fetch hotel details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return <div className="text-center">Hotel not found.</div>;
  }

  

  return (

    <>
      <Nav />
      <MobileNav />
      <div className="container mb-5 d-flex justify-content-center align-items-center DetailsContainer">
  <div className="col-12 col-md-6 mt-2"> {/* Adjusted for responsive behavior */}
    <img
      src={hotel.profile_image}
      alt={`${hotel.name} profile`}
      className="img-fluid rounded"
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
  <div className="col-12 col-md-6 m-2 p-2"> {/* Adjusted for responsive behavior */}
    <div className="row">
      <div className="col-12 col-sm-6"> {/* Stack on mobile, side by side on larger screens */}
        <p className='m-1'><strong>Address:</strong> {hotel.address}</p>
        <p className='m-1'><strong>Name:</strong> {hotel.name}</p>
        <p className='m-1'><strong>City:</strong> {hotel.city}</p>
        <p className='m-1'><strong>State:</strong> {hotel.state}</p>
      </div>
      <div className="col-12 col-sm-6"> {/* Stack on mobile, side by side on larger screens */}
        <p className='m-1'><strong>Country:</strong> {hotel.country}</p>
        <p className='m-1'><strong>Pincode:</strong> {hotel.pincode}</p>
        <p className='m-1'><strong>Phone:</strong> {hotel.phone}</p>
        <p className='m-1'>
      <strong>Website: </strong>
      <OverlayTrigger placement="top" overlay={renderTooltip}>
        <a
          href={hotel.website_link}
          className='text-wrap w-25'
          target="_blank"
          rel="noopener noreferrer"
        >
          {hotel.name}
          {/* Visit Website */}
        </a>
      </OverlayTrigger>
    </p>
      </div>
    </div>
    <div className="mt-3">
      <div className='d-flex'>
        <button className="button BtnBg" onClick={() => handleUpdateClick(hotel.id)}>
          <div className="icon-container">
            <div id="lordIco">
              <lord-icon
                src="https://cdn.lordicon.com/exymduqj.json"
                trigger="hover"
                state="hover-line"
                colors="primary:#ffffff,secondary:#ffffff"
              />
            </div>
          </div>
          <div id='btnico'><i className='fa fa-pen'></i> </div> Update
        </button>

        <button className='button1 BtnBg mx-2' onClick={() => handleDeleteClick(id)}>
          <div id="lordIco">
            <lord-icon
              src="https://cdn.lordicon.com/hwjcdycb.json"
              trigger="hover"
              colors="primary:#000,secondary:#000"
              style={{ width: '30px', height: '30px' }}>
            </lord-icon>
          </div>
          <div id='btnico'><i className='fa fa-trash'></i> </div> Delete
        </button>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </>


  );
};

export default HotelDetails;

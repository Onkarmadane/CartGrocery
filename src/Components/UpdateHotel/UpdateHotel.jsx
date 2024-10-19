import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateHotel = () => {
  const { id } = useParams(); // Assuming the hotel ID is passed as a route parameter
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [hotel_sharing_id, setHotelSharingId] = useState('');
  const [website_link, setWebsiteLink] = useState('');
  const [profile_image, setProfileImage] = useState('');
  // const user_created = 3; // Assuming this is a fixed value for updating
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch hotel data to populate the form
  const fetchHotelData = async () => {
    setLoading(true); // Start loading
    try {
      const token = localStorage.getItem('token'); // Retrieve token from local storage
      console.log('Authorization Token:', token); // Log the token to verify it

      const response = await axios.get(`https://hoteltest-six.vercel.app/hotel/?action=getHotel&id=${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Add the token to the headers
        },
      });

      console.log('Fetched hotel data:', response.data);
      const hotelData = response.data.data;
      setName(hotelData.name);
      setAddress(hotelData.address);
      setCity(hotelData.city);
      setState(hotelData.state);
      setCountry(hotelData.country);
      setPincode(hotelData.pincode);
      setPhone(hotelData.phone);
      setHotelSharingId(hotelData.hotel_sharing_id);
      setWebsiteLink(hotelData.website_link);
      setProfileImage(hotelData.profile_image);
    } catch (error) {
      if (error.response) {
        console.error('Error fetching hotel data:', error.response.data);
        setError('Failed to load hotel data: ' + error.response.data.message);
      } else if (error.request) {
        console.error('Error fetching hotel data:', error.request);
        setError('Failed to load hotel data: No response from server.');
      } else {
        console.error('Error fetching hotel data:', error.message);
        setError('Failed to load hotel data: ' + error.message);
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchHotelData(); // Call fetchHotelData on component mount
  }, [id]); // Run when the component mounts or when `id` changes

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setError(''); // Reset any previous error
    setLoading(true); // Start loading
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    try {
      const response = await axios.patch(
        'https://hoteltest-six.vercel.app/hotel/',
        {
          action: 'patchHotel',
          name,
          address,
          city,
          state,
          country,
          pincode,
          phone,
          hotel_sharing_id,
          website_link,
          profile_image,
          // user_created,
          id: parseInt(id), // Include the hotel ID in the payload
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Add the token to the headers
          },
        }
      );

      if (response.status === 200 || response.status === 204 || response.status === 201) {
        alert('Hotel updated successfully!');
        navigate('/HotelListPage'); // Redirect to the hotel list page after successful update
      }
    } catch (error) {
      console.error('Error updating hotel:', error);
      setError('Failed to update hotel. Please check your credentials or try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center'>Update Hotel</h2>
      {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
      <form onSubmit={handleSubmit} className="form-group w-50 mx-auto p-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name} // Corrected value
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="state" className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pincode" className="form-label">Pincode</label>
          <input
            type="text"
            className="form-control"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="hotel_sharing_id" className="form-label">Hotel Sharing ID</label>
          <input
            type="text"
            className="form-control"
            id="hotel_sharing_id"
            value={hotel_sharing_id}
            onChange={(e) => setHotelSharingId(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="website_link" className="form-label">Website Link</label>
          <input
            type="text"
            className="form-control"
            id="website_link"
            value={website_link}
            onChange={(e) => setWebsiteLink(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="profile_image" className="form-label">Profile Image URL</label>
          <input
            type="text"
            className="form-control"
            id="profile_image"
            value={profile_image}
            onChange={(e) => setProfileImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btnBg">
          <i className='fa fa-pencil'></i> Update Hotel
        </button>
      </form>
    </div>
  );
};

export default UpdateHotel;

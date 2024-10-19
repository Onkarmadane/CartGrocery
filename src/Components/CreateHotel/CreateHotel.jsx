import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateHotel = () => {
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
  const user_created = 2; // Assuming this is a fixed value
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setError(''); // Reset any previous error
    setLoading(true); // Start loading
    const token = localStorage.getItem('token'); // Retrieve token from local storage

    try {
      const response = await axios.post(
        'https://hoteltest-six.vercel.app/hotel/?action=createHotel',
        {
          action: 'postHotel',
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
          user_created,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Add the token to the headers
          },
        }
      );

      if (response.status === 200 || response.status===201) {
        alert('Hotel added successfully!');
        navigate ('/HotelListPage')
        // Optionally, redirect to the hotel list page or clear the form
      }
    } catch (error) {
      console.error('Error adding hotel:', error);
      setError('Failed to add hotel. Please check your credentials or try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mt-5">
      <h2 className='text-center'>Create Hotel</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
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
             onChange={(e) => setProfileImage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btnBg ">
          <i className='fa fa-plus'></i> Add Hotel</button>
      </form>
    </div>
  );
};

export default CreateHotel;

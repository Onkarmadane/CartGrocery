import React, { useEffect, useState } from 'react';
import api, { setAuthToken } from '../helpers/apiService';
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Nav from './Nav/Nav';
import MobileNav from './MobileNav/MobileNav';
import Footer from './Footer/Footer';

const Hotels1 = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const rowsPerPage = 8;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [totalHotels, setTotalHotels] = useState(0);

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (token) {
                setAuthToken(token);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            try {
                setAuthToken(token);
                const response = await api.get(`https://hoteltest-six.vercel.app/hotel/?action=getHotel&page=${currentPage}&records_number=${rowsPerPage}`);
                setTotalHotels(response.data.total_count); // Use total_count from API response
                // console.log("API Response:", response.data);
                const data = response.data.data;
                setItems(data);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHotels();
    }, [currentPage]);

    const totalPages = Math.ceil(totalHotels / rowsPerPage); // Calculate total pages based on totalHotels

    const navigate = useNavigate();
    const handleCreateHotelClick = () => {
        navigate('/CreateHotel');
    };

    const handleCardClick = (id) => {
        navigate(`/hotel/${id}`);
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Nav />
            <MobileNav />
            {isLoggedIn && (
                <div className="d-flex justify-content-end align-items-center m-3 mx-5">
                    <Button variant="primary" type="submit" className="mx-3 btnBg rounded p-2" onClick={handleCreateHotelClick}>
                        Create Hotel
                    </Button>
                    <p className="border border-danger p-2 m-0 rounded">Total Hotels: {totalHotels}</p>
                </div>
            )}
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
                            <div className="hotel-details text-start">
                                <h5 className="hotel-name">Name : {item.name}</h5>
                                <p className="hotel-city">City : {item.city}</p>
                                <p className="hotel-city">Phone : {item.phone}</p>
                                <p onClick={() => handleCardClick(item.id)} className='text-danger'>More...</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-hotels-message">No hotels available. <Link to='/'>Login to See List</Link></p>
                )}
            </div>
            <div className="pagination d-flex justify-content-center">
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li className="page-item">
                            <button
                                className="page-link"
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer />
        </div>
    );
}

export default Hotels1;

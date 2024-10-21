import React, { useEffect, useState } from 'react';
import api, { setAuthToken } from '../helpers/apiService';
import { Link } from 'react-router-dom';

const Hotels = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false); // New loading state
    const rowsPerPage = 8;

    useEffect(() => {
        const fetchHotels = async () => {
            setLoading(true); // Start loading
            try {
                const token = localStorage.getItem('token');
                setAuthToken(token);

                const response = await api.get(`https://hoteltest-six.vercel.app/hotel/?action=getHotel&page=${currentPage}&records_number=${rowsPerPage}`);

                console.log("API Response:", response.data);
                const data = response.data.data; // Check if this path is correct
                setItems(data);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchHotels();
    }, [currentPage]); // Trigger fetch on currentPage change

    const totalPages = Math.ceil(20 / rowsPerPage); // Change 20 to your total number of records

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
            {/* Loading Indicator */}
            {loading && <div className="loading">Loading hotels...</div>}

            {/* Hotel Cards */}
            <div className="hotel-list-container d-flex flex-wrap justify-content-center m-3">
                {items.length > 0 ? (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="hotel-card rounded-sm position-relative"
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="hotel-image-wrapper">
                                <img src={item.profile_image} alt={item.name} className="hotel-image" loading="lazy" />
                            </div>
                            <div className="hotel-details text-start">
                                <h5 className="hotel-name">Name: {item.name}</h5>
                                <p className="hotel-city">City: {item.city}</p>
                                <p className="hotel-city">Phone: {item.phone}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-hotels-message">
                        No hotels available. <Link to='/'>Login to See List</Link>
                    </p>
                )}
            </div>
            {/* Hotel Cards Ends */}

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

        </div>
    );
};

export default Hotels;

import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css';
import Logo from '../../img/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import api, { setAuthToken } from '../../helpers/apiService';
// import '../../img/Cart.gif'
import loader from '../../img/Cart.gif'

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const response = await api.post('https://hoteltest-six.vercel.app/users/login/', {
                phone,
                password,
            });

            const data = response.data.access;
            const expirationTime = new Date().getTime() + 10 * 60 * 1000; // Token expires in 1 minute

            // Save token and expiration time to localStorage
            localStorage.setItem('token', data);
            localStorage.setItem('expiration', expirationTime);

            setAuthToken(data); // Set the token in the Axios instance
            navigate('/Home'); // Redirect to the hotel list page after successful login

            setupAutoLogout(expirationTime); // Set up auto logout with the expiration time
        } catch (err) {
            setError(err.response?.data?.detail || 'Login failed');
            alert('Invalid Credentials')
            setShowAlert(true);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const setupAutoLogout = (expirationTime) => {
        const timeLeft = expirationTime - new Date().getTime();
        if (timeLeft > 0) {
            setTimeout(() => {
                handleLogout(); // Automatically log out when the token expires
            }, timeLeft);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        console.log("Logged out due to token expiration.");
       alert('You are Logged Out Becase Session Is expired... Login Again');
        navigate('/'); // Redirect to the login page
    };

    const isTokenExpired = () => {
        const expirationTime = localStorage.getItem('expiration');
        return expirationTime ? Date.now() > expirationTime : true;
    };

    useEffect(() => {
        // Check if token is expired on mount
        if (isTokenExpired()) {
            handleLogout(); // Log out if the token is expired
            
        }
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <img src={loader} alt="" loading='Lazy'/>
                {/* <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}
            </div>
        );
    }

    return (
        <>
            <section className="vh-100 px-5">
               
                <div className="container py-5 h-100">
                    <h2 className="title text-center">Login</h2>
                    {/* {showAlert && (
                    <div className="alert alert-danger fade" role="alert">
                        {error}!
                    </div>
                )} */}
                    <div className="text-center justify-content-center">
                        <div className="MobFormImg">
                            <img
                                src={Logo}
                                className="img-fluid w-50"
                                alt="Phone"
                                style={{ maxWidth: '300px' }} // Optional: to limit the image size on smaller screens
                            />
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-12 col-md-8 col-lg-7 col-xl-6 d-flex justify-content-center DeskFormImg">
                            <img
                                src={Logo}
                                className="img-fluid w-100 mx-5"
                                alt="Phone"
                                style={{ maxWidth: '300px' }} // Optional: to limit the image size on smaller screens
                            />
                        </div>
                        <div className="col-12 col-md-7 col-lg-5 col-xl-5 offset-xl-1 mx-3">
                            <form onSubmit={handleSubmit}>
                                {/* Phone input */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input
                                        type="text"
                                        id="form1Example13"
                                        className="form-control form-control-lg"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <label className="form-label" htmlFor="form1Example13">
                                        Phone
                                    </label>
                                </div>

                                {/* Password input */}
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form1Example23"
                                        className="form-control form-control-lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label className="form-label" htmlFor="form1Example23">
                                        Password
                                    </label>
                                </div>

                                <div className="d-flex justify-content-around align-items-center mb-4">
                                    {/* Checkbox */}
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                            defaultChecked
                                        />
                                        <label className="form-check-label" htmlFor="form1Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!">Forgot password?</a>
                                    
                                </div>

                                {/* Submit button */}
                                <Button variant="primary btnBg rounded" type="submit" className="w-100 mt-2 my-2">
                                    Login
                                </Button>
                                {/* {showAlert && (
                    <div className="alert alert-danger fade" role="alert">
                        {error}!
                    </div>
                )} */}
                                <div className="divider d-flex align-items-center my-4">
                                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                </div>
                                <p className="signup mt-3 text-center">
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;

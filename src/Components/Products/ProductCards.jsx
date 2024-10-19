import React from 'react';
import './ProductCards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Pagination, Autoplay } from 'swiper/modules';
import TomatoImg from '../../img/tomato.svg';
import onionImg from '../../img/Onion.png';
import potatoImg from '../../img/Potato.svg';
import GreenChilliImg from '../../img/GreenChilli.svg';
import LadyFingerImg from '../../img/LadyFinger.svg';
import AddToCart from '../AddToCart/AddToCart';

const ProductCard = () => {
    // Array holding the dynamic data for each card
    const cardData = [
        { imgPath: TomatoImg, title: 'Tomato', weight: '1kg', offer: '2', price: '20', mutedPrice: '25' },
        { imgPath: onionImg, title: 'Onion', weight: '1.4kg', offer: '5', price: '40', mutedPrice: '21' },
        { imgPath: potatoImg, title: 'Potato', weight: '2kg', offer: '6', price: '60', mutedPrice: '5' },
        { imgPath: GreenChilliImg, title: 'Green Chilli', weight: '2.5kg', offer: '8', price: '80', mutedPrice: '15' },
        { imgPath: LadyFingerImg, title: 'Lady Finger', weight: '1kg', offer: '2', price: '120', mutedPrice: '25' },
        { imgPath: GreenChilliImg, title: 'Green Chilli', weight: '2.5kg', offer: '8', price: '80', mutedPrice: '15' },
        { imgPath: potatoImg, title: 'Potato', weight: '2kg', offer: '6', price: '60', mutedPrice: '5' },
    ];

    return (
        <div className='px-2 mx-2  shadow-sm border border-1 rounded mt-4 mb-4'>
            <h4 className='text-start mt-3 heading'>Vegetable & Fruits</h4>
            <hr style={{ color: '#F36B2D', borderBottom: '2px #F36B2D solid' }} className='w-25' />

            <Swiper
                spaceBetween={5}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-2',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 2 }, // For very small screens, show 2 cards
                    500: { slidesPerView: 2 }, // For screens up to 500px, show 2 cards
                    640: { slidesPerView: 3 }, // For screens above 640px, show 3 cards
                    768: { slidesPerView: 3 }, // For tablets, show 3 cards
                    1024: { slidesPerView: 5 }, // For desktops, show 5 cards
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded mx-auto border border-1 bg-light card p-3" style={{ width: '12rem', height: '18rem', borderRadius: '10px' }}>
                            {/* Discount Badge */}
                            <div className="discount-badge" style={{
                                position: 'absolute', top: '0px', right: '0px', backgroundColor: card.dicColor || '#FF6347', color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', width: '50px',
                                height: '50px',
                                borderRadius: '0 15px'
                            }}>
                                {card.offer}% OFF
                            </div>

                            {/* Product Image */}
                            <div className="image-container d-flex justify-content-center">
                                <img
                                    src={card.imgPath}
                                    className="card-img-top p-0"
                                    alt={card.title}
                                    style={{
                                        height: '100px',  // Fix height
                                        objectFit: 'contain',  // Ensures image fits without distortion
                                    }}
                                />
                            </div>


                            {/* Card Body */}
                            <div className="card-body text-left  p-0" style={{ textAlign: 'left' }}>
                                <h6 className="card-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>{card.title}</h6>
                                <p className="card-text " style={{ fontSize: '12px', color: 'black' }}>{card.weight}</p>
                                <div className="pricing d-flex align-items-center justify-content-between">
                                    <p className="price-current m-0" style={{ fontWeight: 'bold' }}>₹{card.price}</p>
                                    <p className="price-old text-muted m-0 mx-2" style={{ textDecoration: 'line-through', fontSize: '12px' }}>₹{card.mutedPrice}</p>
                                </div>

                                {/* Button Wrapper */}
                                <div className="d-flex justify-content-center ">
                                    {/* <button className="btn btn-sm mt-4 rounded-4 text-center w-100 " style={{ fontSize: '12px', borderColor: '#ff6347' }}>
                                     <i className='fa fa-shopping-cart addToCart'></i>  ADD TO CART</button> */}
                                    <AddToCart />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-2"></div>
        </div>
    );
};

export default ProductCard;

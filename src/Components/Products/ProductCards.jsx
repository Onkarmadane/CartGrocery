import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductCards.css'; // Custom CSS if needed for specific styling
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TomatoImg from '../../img/tomato.svg'
import onionImg from '../../img/Onion.png'
import potatoImg from '../../img/Potato.svg'
import GreenChilliImg from '../../img/GreenChilli.svg'
import LadyFingerImg from '../../img/LadyFinger.svg'

const ProductCard = () => {
    // Array holding the dynamic data for each card
    const cardData = [
        { imgPath: TomatoImg, title: 'Tomato', weight: '1kg', offer: '2', price: '20', mutedPrice: '25', color: 'rgba(243, 107, 45, 0.2)', dicColor: "#F36B2D" },
        { imgPath: onionImg, title: 'Onion', weight: '1.4kg', offer: '5', price: '40', mutedPrice: '21', color: 'rgba(248, 54, 54, 0.2)', dicColor: "#F83636" },
        { imgPath: potatoImg, title: 'Potato', weight: '2kg', offer: '6', price: '60', mutedPrice: '5', color: 'rgba(243, 107, 45, 0.2)', dicColor: "#F36B2D" },
        { imgPath: GreenChilliImg, title: 'Green Chilli', weight: '2.5kg', offer: '8', price: '80', mutedPrice: '15', color: 'rgba(248, 54, 54, 0.2)', dicColor: "#F83636" },
        { imgPath: LadyFingerImg, title: 'Lady Finger', weight: '1kg', offer: '2', price: '120', mutedPrice: '25', color: 'rgba(243, 107, 45, 0.2)', dicColor: "#F36B2D" },
        { imgPath: GreenChilliImg, title: 'Green Chilli', weight: '2.5kg', offer: '8', price: '80', mutedPrice: '15', color: 'rgba(248, 54, 54, 0.2)', dicColor: "#F83636" },
        { imgPath: potatoImg, title: 'Potato', weight: '2kg', offer: '6', price: '60', mutedPrice: '5', color: 'rgba(243, 107, 45, 0.2)', dicColor: "#F36B2D" },
    ];
    return (

        <>
            <h1 className=' mx-5 text-start mt-2 heading'>Vegetable & Fruits</h1>
            <hr className=' hr' />
            <Swiper
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    370: {
                        slidesPerView: 2,  // 3 slides for mobile view
                    },
                    640: {
                        slidesPerView: 4,  // 4 slides for larger mobile screens
                    },
                    768: {
                        slidesPerView: 4,  // 4 slides for tablet screens
                    },
                    1024: {
                        slidesPerView: 5,  // 5 slides for larger screens
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="card product-card mx-auto my-3 m-2" style={{ width: '12rem', borderRadius: '10px' }}>
                            {/* Discount Badge */}
                            <div className="discount-badge" style={{
                                position: 'absolute', top: '0px', right: '0px', backgroundColor: card.dicColor, color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '12px', width: '50px',
                                height: '50px',
                                borderRadius: '0 15px'
                            }}>
                                {card.offer}% OFF
                            </div>

                            {/* Product Image */}
                            <img src={card.imgPath} className="card-img-top p-3" alt={card.title} style={{ backgroundColor: card.color, borderRadius: '10px 10px 0 0' }} />

                            {/* Card Body */}
                            <div className="card-body text-left bg-white border border-1 rounded-bottom" style={{ textAlign: 'left' }}>
                                <h6 className="card-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>{card.title}</h6>
                                <p className="card-text " style={{ fontSize: '12px', color: 'gray' }}>{card.weight}</p>
                                <div className="pricing d-flex  align-items-center justify-content-between">
                                    <p className="price-current m-0" style={{ fontWeight: 'bold' }}>₹{card.price}</p>
                                    <p className="price-old text-muted m-0 mx-2" style={{ textDecoration: 'line-through', fontSize: '12px' }}>₹{card.mutedPrice}</p>
                                    <button className="btn  btn-sm mt-2" style={{ fontSize: '12px', borderColor: card.dicColor }}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default ProductCard;


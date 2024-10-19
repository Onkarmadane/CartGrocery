import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles
import './Card.css';
import { Pagination, Autoplay } from 'swiper/modules';
import FVImg from '../../img/fruitsVegs.svg';
import DairyImg from '../../img/DairyBreakfast.svg';
import EggMeatImg from '../../img/eggMeatFish.svg';
import BathBodyImg from '../../img/BathBody.svg';
import ColdDrinksJuicesImg from '../../img/ColddrinksJuices.svg';
import SnacksImg from '../../img/Snacks.svg';
import IcecreamImg from '../../img/Icecream.svg';

const Card = () => {
    // Array holding the dynamic data for each card
    const cardData = [
        { imgPath: FVImg, title: 'Fruits & Vegetables' },
        { imgPath: DairyImg, title: 'Dairy & Breakfast' },
        { imgPath: EggMeatImg, title: 'Egg, Meat & Fish' },
        { imgPath: BathBodyImg, title: 'Bath & Body'},
        { imgPath: ColdDrinksJuicesImg, title: 'Cold Drinks & Juices',},
        { imgPath: IcecreamImg, title: 'Ice Cream'},
        { imgPath: SnacksImg, title: 'Snacks' },
    ];

    return (
        <div className='px-2 mx-2  shadow-sm border border-1 rounded mt-2'>
            
            <h4 className=' text-start mt-3  heading' style={{padding:'0'}}>Shop From <span style={{ color: '#F36B2D' }}>Top Categories</span></h4>
            <hr style={{ color: '#F36B2D', borderBottom: '2px #F36B2D solid' }} className='w-25' />
            
            <Swiper
                spaceBetween={2}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-1',
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    360: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 6 },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper swiper1 m-0 p-0"
            >
                {cardData.map((card, index) => (
                    <SwiperSlide key={index}>
                        
                        <div className="rounded mx-auto border border-1 bg-light Category-Card" style={{  backgroundColor: card.color, height:'100px',width:'100px'}}>
                            <div className="card-body ">
                            <img 
                                src={card.imgPath} 
                                className="card-img-top p-4 CategoryImg" 
                                alt={card.title} 
                                style={{ 
                                    height: '100px',  // Fix height
                                    objectFit: 'contain',  // Ensures image fits without distortion
                                    borderRadius: '10px 10px 0 0' 
                                }} 
                            />
                            </div>
                        </div>
                            <p className="card-text text-center mt-1">{card.title}</p>
                    
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-pagination-1 m-0 p-0"></div>


        </div>
    );
}

export default Card;

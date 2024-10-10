import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Card.css';
import { Pagination } from 'swiper/modules';
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
        { imgPath: FVImg, title: 'Fruits & Vegetables',color:'rgba(243, 107, 45, 0.2)' },
        { imgPath: DairyImg, title: 'Dairy & Breakfast', color:'rgba(248, 54, 54, 0.2)'},
        { imgPath: EggMeatImg, title: 'Egg, Meat & Fish',color:'rgba(243, 107, 45, 0.2)' },
        { imgPath: BathBodyImg, title: 'Bath & Body', color:'rgba(248, 54, 54, 0.2)' },
        { imgPath: ColdDrinksJuicesImg, title: 'Cold Drinks & Juices',color:'rgba(243, 107, 45, 0.2)' },
        { imgPath: IcecreamImg, title: 'Ice Cream', color:'rgba(248, 54, 54, 0.2)' },
        { imgPath: SnacksImg, title: 'Snacks' ,color:'rgba(243, 107, 45, 0.2)'},
    ];

    return (
        <div>
            <h1 className=' mx-5 text-start mt-2 heading'>Shop From <span style={{ color: '#F36B2D' }}>Top Categories</span></h1>
            <hr style={{ color: '#F36B2D', borderBottom: '2px #F36B2D solid' }} className='w-50' />
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
                        <div className="card m-2 rounded-md mx-auto my-3" style={{width:"200px",height:'250px',backgroundColor:card.color}}>
                            <div className="card-body d-flex justify-content-center">
                                <img src={card.imgPath} className="card-img-top w-75 mx-auto" alt={card.title} />
                            </div>
                            <p className="card-text  p-3">{card.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Card;

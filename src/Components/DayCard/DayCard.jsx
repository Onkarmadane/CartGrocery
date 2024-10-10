import React from 'react';
import dealImg from '../../img/deal1.png'
import './DayCard.css'
import DealOfDay from '../DealOfDay/DealOfDay';
    function DayCard() {
        const DealImgs = [
            { path: dealImg },
            { path: dealImg },
            { path: dealImg },
            { path: dealImg },
        ]
        return (
            <>
                <DealOfDay>
                    <h1 className='fw-bolder' style={{ fontFamily: 'Rammetto One' }}>Deal of the Day</h1>
                    <p>Get a sneak peek at a new deal each day for CART Day</p>
                </DealOfDay>
                <div className="d-flex ">
                    <div className='img-fluid'>
                        {DealImgs.map((Deal, index) => (
                            <img src={Deal.path} alt="" className=' card-img-top ' style={{margin:'5px' , width:'150px'}} />
                        ))}
                    </div>
                </div>
            </>
        );
    }

export default DayCard;


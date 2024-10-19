import React from 'react';
import dealImg from '../../img/deal1.png';
import './DayCard.css';
import DealOfDay from '../DealOfDay/DealOfDay';

function DayCard() {
    const DealImgs = [
        { path: dealImg },
        { path: dealImg },
        { path: dealImg },
        { path: dealImg },
    ];

    return (
        <>
                <div className=" d-flex flex-wrap mx-3">
                    {DealImgs.map((Deal, index) => (
                        <img
                            key={index} // Add a unique key prop
                            src={Deal.path}
                            alt={`Deal Image ${index + 1}`} // Descriptive alt text
                            className='card-img-top mx-auto'
                            style={{ margin: '5px' }}
                        />
                    ))}
                </div>


        </>
    );
}

export default DayCard;




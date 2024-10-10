import React, { Children } from 'react';
import dawatmg from '../../img/dawat.png'
import tetleyImg from '../../img/tetley.png'
import indiaGateImg from '../../img/indiagate.png'
import DealOfDay from '../DealOfDay/DealOfDay';

function OfferImg() {
    const OfferImgs = [
        { path: dawatmg },
        { path: tetleyImg },
        { path: indiaGateImg },
        { path: tetleyImg },
        { path: dawatmg },
        { path: indiaGateImg },

    ]
    return (
        <div className=" d-flex ">
            <div>
                <DealOfDay>
                <h1 className='fw-bolder' style={{ fontFamily: 'Rammetto One' }}>Deal of the Week</h1>
                <p>Get a sneak peek at a new deal each day for CART week</p>
                </DealOfDay>
                {OfferImgs.map((offer, index) => (
                    <img src={offer.path} alt="offer" className=' p-3 card-img-top' />
                ))}
            </div>
        </div>
    );
}

export default OfferImg;

import React, { useEffect, useState } from 'react'
import HotelList from '../Components/HotelList/HotelList'
import axios from 'axios';
import Hotels1 from '../Components/Hotels1';


const HotelListPage = () => { 
  return (
    <div>
        {/* <HotelList /> */}
        <Hotels1/>
    </div>
  )
}

export default HotelListPage
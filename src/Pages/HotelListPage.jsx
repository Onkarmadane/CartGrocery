import React, { useEffect, useState } from 'react'
import HotelList from '../Components/HotelList/HotelList'
import axios from 'axios';


const HotelListPage = () => { 
  return (
    <div>
        <HotelList />
    </div>
  )
}

export default HotelListPage
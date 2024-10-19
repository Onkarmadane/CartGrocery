import React from 'react'
import Nav from '../Nav/Nav'
import MobileNav from '../MobileNav/MobileNav'
import Footer from '../Footer/Footer'

const Profile = () => {
  return (
  <>
  <Nav/>
  <MobileNav />
    <div className='container d-flex '>
      <ul className='text-decoration-none justify-content-center  align-items-center'>
      <li> <lord-icon
        src="https://cdn.lordicon.com/kdduutaw.json"
        trigger="hover"
        colors="primary:#121331,secondary:#000000"
        style={{width:'25px',height:'25px'}}>
      </lord-icon>My Account</li>
      <li>
      <lord-icon
    src="https://cdn.lordicon.com/jprtoagx.json"
    trigger="hover"
    colors="primary:#000000,secondary:#000000"
    style={{width:'25px',height:'25px'}}>
</lord-icon>
My Orders</li>
      <li><lord-icon
    src="https://cdn.lordicon.com/jprtoagx.json"
    trigger="hover"
    colors="primary:#000000,secondary:#000000"
    style={{width:'25px',height:'25px'}}>
</lord-icon>
        Shop</li>
      <li>Logout</li>
      </ul>
    </div>
    <Footer/>
    </>
  )
}

export default Profile
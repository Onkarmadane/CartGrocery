import React from 'react'
import './Button.css'
import deleteIcon from '../../img/wired-outline-185-trash-bin-hover-empty.svg'
const Button = () => {
    return (
        <div className='d-flex'>
            <button class="button BtnBg">
                
                <lord-icon
                    src="https://cdn.lordicon.com/exymduqj.json"
                    trigger="hover"
                    state="hover-line"
                    colors="primary:#ffffff,secondary:#ffffff"
                    style={{ width: '30px', height: '30px' }}
                    >
                </lord-icon>
                Update
            </button>

            <button className='button1 BtnBg mx-2'>
                <lord-icon
                    src="https://cdn.lordicon.com/hwjcdycb.json"
                    trigger="hover"
                    colors="primary:#000,secondary:#000"
                    style={{ width: '30px', height: '30px' }}>
                </lord-icon>
                Delete
            </button>

        </div>

    )
}

export default Button


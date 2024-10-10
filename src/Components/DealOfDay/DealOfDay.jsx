import React from 'react'

const DealOfDay = (props) => {
  const { children} = props;
  return (
    <div className='text-center text-white rounded rounded-lg' style={{ backgroundColor: '#cc0103' }}>
      <div className="p-3">
        {children}
      </div>
    </div>
  )
}

export default DealOfDay
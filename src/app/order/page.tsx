import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar/>

      <div className="flex justify-center items-center">
  <Image
    src="https://img.freepik.com/premium-vector/vector-illustration-about-concept-no-items-found-no-results-found_675567-6665.jpg?semt=ais_hybrid"
    alt="no order"
    width={500}
    height={100}
  />
</div>

      
    </div>
  )
}

export default page

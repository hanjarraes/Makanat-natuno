import Location from '../../assets/img/Icon/Location.svg'
import React from 'react'

const Hero = () => {
  return (
    <div className={`Hero bg-img-hero`}>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className='hero-tittle'>Earn Money hosting with us!</div>
        <div className='hero-desc'>Utilize your space by renting for meetings, events, and films or photo shoots</div>
        <div className='hero-search'><img src={Location} alt="Phone-Hosting" /><input type="text" placeholder='Where?' /> <button>Become a host</button></div>
      </div>
    </div>
  )
}

export default Hero;

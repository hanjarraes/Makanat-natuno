/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Whatsapp, HambergerMenu, ArrowDown2, ArrowUp2 } from 'iconsax-react'
import Modal from 'react-modal'
import Close from '../../assets/img/Icon/close.svg'
import LogoMakanat from '../../assets/img/Icon/makanat_logo.svg'
import World from "../../assets/img/Icon/world.svg"

const customStyles = {
  overlay: {
    zIndex: 999,
  },
  content: {
    height: window.innerHeight,
    width: window.innerWidth,
    background: '#fff',
  },
}




const Header = () => {
  const [openModal, setOpenModal] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark navbar-header'>
        <div style={{ display: 'contents' }}>
          <a className='navbar-brand d-flex' href='/'>
            <img src={LogoMakanat} alt="LogoMakanat" className="img-header" />
          </a>
          <div
            className='d-flex d-md-none'
            onClick={() => setOpenModal(!openModal)}
          >
            <HambergerMenu className='burger-nav' />
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item' />
            </ul>
            <div>
              <ul className='navbar-nav nav-header-custom mr-auto d-flex align-items-center'>
                <li className="nav-item dropdown">
                  <div onClick={() => setOpenDropdown(!openDropdown)}>
                    Activities {openDropdown ?  <ArrowUp2 /> : <ArrowDown2 /> } 
                  </div>
                  {openDropdown ? (
                    <div className='dropdown-item-nav'>
                      <a href='https://makanat.com/activities/3'>Marketing</a>
                      <a href='https://makanat.com/activities/12' >Event</a>
                      <a href='https://makanat.com/activities/4'>Productions</a>
                    </div>
                  ) : ''}
                </li>
                <li className='nav-item active mx-2'>
                  <a className='nav-link' href='/'>
                    <div className='btn-light-space'> List your space</div>
                  </a>
                </li>
                <li className='nav-item active mx-2'>
                  <a className='nav-link' href='https://makanat.com/SignUp'>
                    Sign up
                  </a>
                </li>
                <li className='nav-item active mx-2'>
                  <a className='nav-link' href='https://makanat.com/login'>
                    Login
                  </a>
                </li>
                <li className='nav-item active mx-2'>
                  <img src={World} alt="LogoMakanat" className="img-header" />
                </li>
                <li className='nav-item active mx-2'>
                  <div className='vertical-line' />
                </li>
                <li className='nav-item active mx-2'>
                  <a className='nav-link' href='/'>
                    SAR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          isOpen={openModal}
          style={customStyles}
          className='modalNavCustomHero'
          contentLabel='Nav Modal'
        >
          <div>
            <div className='modalNavHeaderHero'>
              <img src={LogoMakanat} alt='Logo Header' />
              <img src={Close} onClick={() => setOpenModal(!openModal)} alt="close" />
            </div>
            <div className='content-nav-modal' >
              <div className='title-nav-mobile'>Activities</div>
              <div className='items-modal'>
                <a href='https://makanat.com/activities/3' >
                  Meeting
                </a>
                <a href='https://makanat.com/activities/12' >
                  Event
                </a>
                <a href='https://makanat.com/activities/4'>
                  Productions
                </a>
              </div>
              <div className='line-nav-hori' />
              <div className='items-modal'>
                <a href='https://makanat.com/SignUp' className='small' >
                  Sign up
                </a>
                <a href='https://makanat.com/login' className='small' >
                  Login
                </a>
                <a href='/' className='small btn-list' onClick={() => setOpenModal(!openModal)}>
                  List your space
                </a>
              </div>
              <div>
                <a
                  target='_blank'
                  href='https://api.whatsapp.com/send/?phone=6281511500645&text&type=phone_number&app_absent=0'
                  className='btn-whatsApp'
                  rel='noreferrer'
                >
                  <Whatsapp /> <div className='title'>Hubungi Kami</div>
                </a>
                <a target="_blank" href='https://online.pgn.co.id/register/residensial' className='btn-default mt-3' rel='noreferrer'>
                  <div className='title'>Daftar Sekarang</div>
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </nav>
    </>
  )
}

export default Header

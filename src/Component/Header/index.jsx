/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Whatsapp, HambergerMenu, ArrowDown2 } from 'iconsax-react'
import Modal from 'react-modal'
import LogoMakanat from '../../assets/img/Icon/makanat_logo.svg'

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
            <HambergerMenu />
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item' />
            </ul>
            <div>
              <ul className='navbar-nav nav-header-custom mr-auto d-flex align-items-center'>
                <li className="nav-item dropdown">
                  <div>
                    Activities <ArrowDown2 />
                  </div>
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
              </ul>
            </div>
          </div>
        </div>
        <Modal
          isOpen={openModal}
          style={customStyles}
          className='modalNavCustomHero'
          contentLabel='Example Modal'
        >
          <div>
            <div className='modalNavHeaderHero'>
              <img src={LogoMakanat} alt='Logo Header Pertamina' />
              <span onClick={() => setOpenModal(!openModal)}>X</span>
            </div>
            <div
              className='d-flex flex-column justify-content-between'
              style={{ height: window.innerHeight - 100 }}
            >
              <div className='items-modal'>
                <a href='/' onClick={() => setOpenModal(!openModal)}>
                  List your space
                </a>
                <a hClick={() => setOpenModal(!openModal)} >
                  Sign up
                </a>
                <a hClick={() => setOpenModal(!openModal)} >
                  Login
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

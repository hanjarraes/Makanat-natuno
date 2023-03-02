import React, { useState } from 'react'
import { Add, Minus } from 'iconsax-react';


const Faq = () => {
  const [active, setActive] = useState('paid')
  return (
    <div className="faq-content">
      <div className="custom-container container-faq">
        <div className="faq-title"> Frequently Asked <span>Questions</span></div>
        <div className='card-faq' onClick={() => setActive('paid')}>
          <div className='d-flex justify-content-between' style={{ cursor: 'pointer' }}>
            <div className={`${active === 'paid' ? 'faq-active ' : ''} title-content-faq`}>
              How do I get paid?
            </div>
            <div className={` ${active === 'paid' ? 'faq-active ' : ''} arrow-icon-question`}>{active === 'paid' ? <Minus /> : <Add />}</div>
          </div>
          <div className={active === 'paid' ? 'desc-content-faq' : 'desc-content-faq-close'}>
            Through wire-transfer to your bank account. Makanat process payouts 3 days after guest check-out.
          </div>
        </div>
        <div className='card-faq' onClick={() => setActive('MA')}>
          <div className='d-flex justify-content-between' style={{ cursor: 'pointer' }}>
            <div className={`${active === 'MA' ? 'faq-active ' : ''} title-content-faq`}>
              What is Makanat agreement (MA)?
            </div>
            <div className={` ${active === 'MA' ? 'faq-active ' : ''} arrow-icon-question`}>{active === 'MA' ? <Minus /> : <Add />}</div>
          </div>
          <div className={active === 'MA' ? 'desc-content-faq' : 'desc-content-faq-close'}>
            An auto generated contract between space owner and event organizer sent to both parties upon host approval of request. MA includes, booking details, host rules, space cancellation policy and Makanat policy of use.
          </div>
        </div>
        <div className='card-faq' onClick={() => setActive('host')}>
          <div className='d-flex justify-content-between' style={{ cursor: 'pointer' }}>
            <div className={`${active === 'host' ? 'faq-active ' : ''} title-content-faq`}>
              Who can host?
            </div>
            <div className={` ${active === 'host' ? 'faq-active ' : ''} arrow-icon-question`}>{active === 'host' ? <Minus /> : <Add />}</div>
          </div>
          <div className={active === 'host' ? 'desc-content-faq' : 'desc-content-faq-close'}>
            <div style={{ marginBottom: 15 }}>Anyone who owns or manages equipped space that can be publicly utilized for business activities, content creation or public and private events, can list their space and start earning today.</div>

            <span>Business spaces:</span>
            <div>Meeting rooms, Co-working/flexible spaces. Lecture halls and classrooms.</div>
            <span>Event spaces:</span>
            <div>Exhibition/gallery, conference hall, wedding hall, elegant outdoor spaces. or even homes!</div>
            <span>Production spaces:</span>
            <div>Video/audio production studios, and whatever space that can be used for cinematography.</div>
          </div>
        </div>
        <div className='card-faq' onClick={() => setActive('insurance')}>
          <div className='d-flex justify-content-between' style={{ cursor: 'pointer' }}>
            <div className={`${active === 'insurance' ? 'faq-active ' : ''} title-content-faq`}>
              Does Makanat provide insurance?
            </div>
            <div className={` ${active === 'insurance' ? 'faq-active ' : ''} arrow-icon-question`}>{active === 'insurance' ? <Minus /> : <Add />}</div>
          </div>
          <div className={active === 'insurance' ? 'desc-content-faq' : 'desc-content-faq-close'}>
            An auto generated contract between space owner and event organizer sent to both parties upon host approval of request. MA includes, booking details, host rules, space cancellation policy and Makanat policy of use.
          </div>
        </div>
      </div>
    </div >
  );
};

export default Faq;

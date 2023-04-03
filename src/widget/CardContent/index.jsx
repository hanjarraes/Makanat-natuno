
import React, { useState } from 'react';
import HeroSlider, { Slide } from 'hero-slider'
import Star from "../../widget/Star";
import Attendees from "../../assets/img/Icon/attendees2.svg";

const CardContent = ({
  data,
}) => {
  const [like, setLike] = useState(false);
  return (
    <div className="card-content-img">
      {data.newItem ? <div className="new-text">New</div> : ''}
      <div className="like-icon" onClick={() => setLike(!like)}>
        {like ? <i class="ri-heart-3-fill"></i> : <i className="ri-heart-3-line" />}
      </div>
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        settings={{
          slidingDuration: 150,
          slidingDelay: 50,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 1500,
        }}
      >
        {data.slides.map((slide, index) => (
          <Slide
            key={index}
            background={{
              backgroundImageSrc: slide.image
            }}
          />
        ))}
      </HeroSlider>
      <div className="p-2">
        <div className="title-content-card">{data.title}</div>
        <div className="rate-content-card">
          <img src={Attendees} alt="img-attendees-content" />
          <span>{data.total}</span>
          <Star value={data.rate} width={23} height={20} spacing={5} />
          <span>{data.total}</span>
        </div>
        <div className="desc-content-card">Respon Time: <span>{data.desc}</span></div>
      </div>
    </div>
  );
};

export default CardContent;

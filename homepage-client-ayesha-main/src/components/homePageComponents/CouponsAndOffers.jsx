import React from 'react'
import styled from "styled-components"

//icon imports
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import line from '../../assets/images/gold-line.svg'
import offer1 from '../../assets/images/CouponsAndOffersimages/offer1.png'
import offer2 from '../../assets/images/CouponsAndOffersimages/offer2.png'
import offer3 from '../../assets/images/CouponsAndOffersimages/offer3.png'

// swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Wrapper = styled.div`

width: 100%;
height: 80vh;
background: #F9F9F9;
padding: 20px 0px; 

.top-content{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        width: 50%;
        text-align: center;
    }
}
.heading{
    display: flex;
    column-gap: 20px;
    margin: 20px 0px;
}
${'' /* swiper styles start */}
.swiper {
  width: 80%;
  height: 100%;
  
  padding:0px 20px 0px 20px;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
}
.slider-content{
    width: 100%;
    height: 25%;
    position: absolute;
    bottom: 0px;
    background: rgba(0,0,0,0.5);
    border-radius: 0px 0px 20px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 7px;
    p{
        color: #FFF;
        font-size: 20px;
        font-weight: 500;

    }
}
.slider-controller {
    width: 100%;
    height: 50px;
    position: relative;
}
.swiper-button-prev, .swiper-button-next{
    width: 35px;
    height: 35px;
    color: #FF9D02;
    border: 2px solid #FF9D02;
    border-radius: 100px;
    span{
        font-size: 20px;
        display:flex;
        align-items: center;
    }

}
.swiper-button-prev{
    left: 42%;
}
.swiper-button-prev::after{
    content:'';
}

.swiper-button-next{
    right: 42%;
}
.swiper-button-next::after{
    content:'';
}
.swiper-pagination-fraction{
    width: 50px;
    position: absolute;
    left: 48%;
}
.swiper-pagination-current{
    color: #DF9300;
    font-weight: 700;
    font-size: 35px;
}
.swiper-pagination-total{
    color: #828282;
    font-size: 20px;
    font-weight: 500;
}

${'' /* swiper styles end */}

`;

const CouponsAndOffers = () => {
  return (
    <Wrapper>
        <div className="top-content">
                <div className="heading">
                    <img className="line" src={line} alt="" />
                    <h2>Coupons And Offers</h2>
                    <img className="line" src={line} alt="" />
                </div>
        </div>
        <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={50}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'fraction',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="cuisines-swiper"
                >


                    <SwiperSlide>
                        <img src={offer1} alt="" />

                        <div className="slider-content">
                            <p>
                                Indian
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={offer2} alt="" />

                        <div className="slider-content">
                            <p>
                                Arabian
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={offer3} alt="" />

                        <div className="slider-content">
                            <p>
                                Chinese
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={offer1} alt="" />

                        <div className="slider-content">
                            <p>
                                American
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={offer2} alt="" />

                        <div className="slider-content">
                            <p>
                                Chinese
                            </p>
                        </div>
                    </SwiperSlide>






                    <div className='slider-controller'>
                        <div className="swiper-button-prev">
                            <span><FaArrowLeftLong /></span>
                        </div>
                        <div className="swiper-button-next">
                            <span><FaArrowRightLong /></span>
                        </div>

                        <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal"><span className="swiper-pagination-current">4</span> / <span className="swiper-pagination-total">5</span></div>


                    </div>

                </Swiper>
            </div>
    </Wrapper>
    
  )
}

export default CouponsAndOffers


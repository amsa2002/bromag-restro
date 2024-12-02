import React from 'react'
import styled from "styled-components"

//icon imports
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import line from '../../assets/images/gold-line.svg'
import cart1_img from '../../assets/images/couponsAndOffersImages/cart1img.png'
import amazonpay_logo from '../../assets/images/couponsAndOffersImages/amazonimg.png'
import line_img from '../../assets/images/couponsAndOffersImages/Line 52.png'
import cart2_img from '../../assets/images/couponsAndOffersImages/cart2img.png'
import cart3_img from '../../assets/images/couponsAndOffersImages/cart3img.png'
import paytm_logo from '../../assets/images/couponsAndOffersImages/paytmimg.png'

// swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Wrapper = styled.div`

width: 100%;
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
.slider-cart1{
    background: #4A4A4A;
    Width:628px;
    height:331px;
    border-radius:24px;
    padding-left:46px;
    padding-top:47px;
    position:relative;
}
.slider-content1{
    // width: 100%;
    // height: 25%;
    // position: absolute;
    // bottom: 0px;
    // background: rgba(0,0,0,0.5);
    // border-radius: 0px 0px 20px 20px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // padding-bottom: 7px;
    h3{
        color:#FFF;
        font-size:42px;
        font-weight:800;
    }
    p{
        color: #FFF;
        font-size: 20px;
        font-weight: 600;
        line-height:30px:
        font-family:'poppins';
        border-top:2px dashed #FFFF;
        border-bottom:2px dashed #FFFF;
        width:400px;
        padding:16px 0px;
        margin:25px 0px;
    }
    img.cart-img1{
        position:absolute;
        right:0px;
        top:50px;
    }
    .payment-container{
    margin-top:40px;
        h5{
            color:#FFF;
            font-size:26px;
            font-weight:800;
            font-family:'poppins';
            display:inline;
        }
        .payment-logo{
            display:inline;
            background:#FFF;
            padding:18px 15px 14px 15px;
            margin-left:20px;
            border-radius:7px;
            img{
                widht:113px;
            }
        }
    }
}
.slider-cart2{
    width:628px;
    height:331px;
    background: #1296E9;  
    border-radius:24px; 
    padding:34px 0px 0px 31px;
    position:relative;
    h3{
        width:228px;
        color:#FFF;
        font-size:40px;
        font-weight:400;
        font-family: "RocknRoll One", serif;
        span{
            font-size:64px;
        }
    }
    p{
        font-family:"Poppins", serif;
        font-weight:600;
        font-size:24px;
        line-height:36px;
        color:#FFF;
    }
    img.cart-img2{
        position:absolute;
        right:0px;
        top:50px;
    }
    .payment-container{
    margin-top:30px;
        h5{
            color:#FFF;
            font-size:24px;
            font-weight:600;
            font-family:'poppins';
            display:inline;
        }
        .payment-logo{
            display:inline;
            background:#FFF;
            padding:9px 26px 9px 26px;
            margin-left:15px;
            border-radius:6px;
            img{
                widht:63px;
            }
        }
    }
}
.slider-cart3{
    width:628px;
    height:331px;
    padding:12px 15px;
    background: #DF9300;
    border-radius:24px;
    color:#FFF;
    font-family: "RocknRoll One", serif;
    position:relative;
    
    .slider-content{
        border:2px dashed #FFF;
        border-radius:24px;
        height:308px;
        padding:12px 0px 0px 20px;

        h3{
            font-size:32px;
            font-weight:400;
            margin:0px 0px 7px 0px;
        }
        h5{
            font-size:64px;
            font-weight:400;
            color:#FFFF;
            display:inline-block;
            vertical-align:top;
            margin:0px;
            padding:0px;
            line-height:56px;
        }
        .cashback-container{
            display:inline-block;
            width:187px;
            font-size:32px;
            font-weight:400;
            line-height:35px;
            margin-left:20px;
            padding:0px;
            span{
                font-size:20px;
                font-weight:100;
            }
        }
            p{
                font-size:20px;
                font-weight:400;
                line-height:28px;
                color:#FFFF;
                margin-top:10px;
            }
            img.cart-img3{
                position:absolute;
                right:0px;
                top:50px;
            }
            .payment-container{
                margin-top:30px;
                h5{
                    color:#FFF;
                    font-size:24px;
                    font-weight:600;
                    font-family:'poppins';
                    display:inline;
                }
            }
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
                    slidesPerView={1.3}
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
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="cuisines-swiper"
                >


                    <SwiperSlide>
                        <div className='slider-cart1'>
                            <div className='slider-content1'>
                                <h3>FLAT ₹30 CASHBACK</h3>
                                <p>On min. ₹500 value once per user txn.</p>
                                <img className='cart-img1' src={cart1_img} alt="" />
                                <div className='payment-container'>
                                    <h5>On Orders  Via </h5> 
                                    <div className='payment-logo'>
                                        <img src={amazonpay_logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider-cart2'>
                            <div className='slider-conten2'>
                                <h3>GET UP TO <span>&#8377;299</span></h3>
                                <img src={line_img} alt="" />
                                <p>CASHBACK ON MOV OF ₹ 499</p>
                                <img className='cart-img2' src={cart2_img} alt="" />
                                <div className='payment-container'>
                                    <h5>Order Via </h5> 
                                    <div className='payment-logo'>
                                        <img src={paytm_logo} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider-cart3'>
                            <div className='slider-content'>
                                <h3>GET</h3>
                                <h5>15%</h5>
                                <div className='cashback-container'>CASHBACK <span>UP TO ₹100</span></div>
                                <p>Valid On First UPI Transaction</p>
                                <img className='cart-img3' src={cart3_img} alt="" />
                                <div className='payment-container'>
                                    <h5>On Orders  Via </h5> 
                                    {/* <div className='payment-logo'>
                                        <img src={amazonpay_logo} alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
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
                    </SwiperSlide> */}






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


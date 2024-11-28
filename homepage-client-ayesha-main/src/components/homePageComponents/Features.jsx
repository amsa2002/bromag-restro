import styled from 'styled-components'
//icon imports
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
//image imports
import lake from '../../assets/images/diningFeaturesImages/lake.png'
import beach from '../../assets/images/diningFeaturesImages/beach.png'
import ac from '../../assets/images/diningFeaturesImages/ac.png'
import bars from '../../assets/images/diningFeaturesImages/bars.png'

//swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Wrapper = styled.div`
padding: 40px 0px;
.left-div{
    width: 30%;
}
.heading{
    position: absolute;
    top: 110px;
    left: 200px;
}
.left-div button{
    background: transparent;
    border-radius: 35px;
    border: 1px solid #DF9300;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    margin: 150px 0px 0px 80px;
   p{
color: #DF9300;
font-size: 18px;
   }
    span{
        color: #DF9300;
        margin-left: 10px;
        font-size: 18px;
        padding-top: 5px;
    }
}
.right-div{
    width: 80%;
    flex-direction: column;
}
.content{
    width: 100%;
    height: 30vh;
    background: #F9F9F9;
    padding: 50px;
    border-radius: 80px; 
    text-align:center;
    p{
        font-size: 18px;
        padding: 0px 200px;
    }
}
.card-deck{
    width: 100%;
}

${'' /* swiper styles start */}

.swiper {
  width: 80%;
  height: 100%;
  margin-top: -80px;
  padding:0px 20px 0px 20px;
}


.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

}

.slider-controller {
    width: 100%;
    height: 25px;
    position: relative;
}

.swiper-button-prev, .swiper-button-next{
    width: 30px;
    height: 30px;
    color: #FF9D02;
    border: 2px solid #FF9D02;
    border-radius: 100px;

    span{
        font-size: 15px;
        display:flex;
        align-items: center;
    }

}
.swiper-button-prev{
    left: 38%;
}
.swiper-button-prev::after{
    content:'';
}

.swiper-button-next{
    right: 38%;
}
.swiper-button-next::after{
    content:'';
}
.swiper-pagination{
    width: auto;
    position: absolute;
    left: 45%;
}
.swiper-pagination-bullet-active{
    background: #000 !important;
    width: 12px;
    height: 12px;
}

.features-card{
    border-radius: 20px;
    box-shadow: 0px 15px 25px 0px rgba(179, 195, 218, 0.30);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
}
.card-img{
        width: 100%;
        height: 50%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
 .features-card   p{
        color: #494949;
        font-size: 18px;
        font-weight: 700;
        padding: 20px 0px 15px 0px;
    }

${'' /* swiper styles end */}
`;


const Features = () => {
    return (
        <Wrapper>
            <div className='heading'>
                <h4>Dining</h4>
                <h2>Features</h2>
            </div>
            <div className="parent-div">
                <div className="left-div">

                    <button type='button'>
                        <p>Book Now</p>
                        <span><FaArrowRightLong /></span>
                    </button>
                </div>
                <div className="right-div">
                    <div className='content'>
                        <p>At our restaurant, we offer a unique blend of ambiance and amenities to make your dining experience truly exceptional. Whether you’re seeking a serene view, a lively atmosphere, or ultimate comfort, our diverse dining features are designed to meet your every mood and occasion.
                        </p>
                    </div>
                    <div className='card-deck'>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            grabCursor={true}
                            loop={true}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[Pagination, Navigation]}
                            className="blogs-swiper"
                        >


                            <SwiperSlide>
                                <div className='features-card'>
                                    <div className='card-img'><img src={lake} alt="lake view" /></div>
                                    <p>Lake View</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='features-card'>
                                    <div className='card-img'><img src={lake} alt="lake view" /></div>
                                    <p>Lake View</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='features-card'>
                                    <div className='card-img'><img src={beach} alt="beach view" /></div>
                                    <p>Beach View</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='features-card'>
                                    <div className='card-img'><img src={ac} alt="AC Dining" /></div>
                                    <p>AC Dining</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='features-card'>
                                    <div className='card-img'><img src={bars} alt="Bars" /></div>
                                    <p>Bars</p>
                                </div>
                            </SwiperSlide>






                            <div className='slider-controller'>
                                <div className="swiper-button-prev">
                                    <span><FaArrowLeftLong /></span>
                                </div>
                                <div className="swiper-button-next">
                                    <span><FaArrowRightLong /></span>
                                </div>

                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span><span className="swiper-pagination-bullet"></span></div>
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default Features
import styled from "styled-components"
//icon imports
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

//image imports
import cuisinesBg from '../../assets/images/cuisinesImages/cuisines-bg.png'
import cuisine1 from '../../assets/images/cuisinesImages/cuisine-1.png'
import cuisine2 from '../../assets/images/cuisinesImages/arabian.png'
import cuisine3 from '../../assets/images/cuisinesImages/american.png'
import cuisine4 from '../../assets/images/cuisinesImages/chinese.png'




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
.heading{
    width: 100%;
    height: 30vh;
    background: url(${cuisinesBg}) rgba(0,0,0,0.5);
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    padding: 30px;
    backdrop-filter: blur(8px);
    position: relative;
    h2{
        text-align: center;
        color:#EDEDED;
    }
}
.blur{
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    backdrop-filter: blur(4px);
    z-index: -1;
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

const Cuisines = () => {
    return (
        <Wrapper>
            <div className="heading">
                <div className="blur"></div>
                <h2>Cuisines</h2>
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
                        <img src={cuisine1} alt="" />

                        <div className="slider-content">
                            <p>
                                Indian
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={cuisine2} alt="" />

                        <div className="slider-content">
                            <p>
                                Arabian
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={cuisine3} alt="" />

                        <div className="slider-content">
                            <p>
                                Chinese
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={cuisine4} alt="" />

                        <div className="slider-content">
                            <p>
                                American
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={cuisine3} alt="" />

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
export default Cuisines
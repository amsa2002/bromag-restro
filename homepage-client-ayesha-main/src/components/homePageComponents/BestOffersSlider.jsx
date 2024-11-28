//styled-component imports
import styled from 'styled-components';

//swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

//image imports
import bsImage1 from '../../assets/images/bestOffersImages/bs-img-1.png'
import bsImage2 from '../../assets/images/bestOffersImages/bs-img-2.png'
import bsImage3 from '../../assets/images/bestOffersImages/bs-img-3.png'


const Wrapper = styled.div`
width: 100%;
height: 100%;
${'' /* swiper styles start  */}
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  ${'' /* padding-right: 30px; */}
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 400px;
  margin: 0px 30px;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius:20px;
  object-fit: cover;
}

.swiper-pagination-bullet-active{
    background-color: #000;
    width: 14px;
    height: 14px;
}


${'' /* swiper styles end  */}
`;


const BestOffersSlider = () => {


    return (
        <Wrapper>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 3,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={bsImage1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bsImage2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bsImage3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bsImage1} />
                </SwiperSlide>
            </Swiper>




        </Wrapper>
    )
}
export default BestOffersSlider
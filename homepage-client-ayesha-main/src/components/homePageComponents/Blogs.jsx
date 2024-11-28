import styled from "styled-components"

//image imports
import sLine from '../../assets/images/sline.svg'
import blogBg from '../../assets/images/blogs-bg.png'
import blogImg from '../../assets/images/blog-img.png'

//swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


const Wrapper = styled.div`
width: 100%;
height: 70vh;
background: url(${blogBg}) rgba(0,0,0,0.7);
background-blend-mode: overlay;
background-size: cover;
background-repeat: no-repeat;
backdrop-filter: blur(10px);
padding: 40px;
.heading{
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin-top: 20px;
    h2{
        color: #ECECEC;
        font-size: 45px;
        font-weight: 700;
    }
}


${'' /* swiper styles start */}
.blogs-slider{
    width: 100%;
    height: 60%;
    margin-top: 50px;
}



.swiper {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 100px;
}


.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.slider-content{
    width: 100%;
    height: 40%;
    position: absolute;
    bottom: 0px;
    background: rgba(25, 25, 25, 0.80);
    backdrop-filter: blur(2px);
    padding: 15px 30px;
    p{
        width: 100%;
        height: 80%;
        color: #FFF;
        font-size: 10px;
        font-weight: 500;
        overflow: hidden;
    }
    a{
        color: #FFF;
        font-size: 10px;
        font-weight: 500;
    }
}

.swiper-button-prev, .swiper-button-next{
    width: 60px;
    height: 60px;
    background: #6D6D6DB2;
    color: #fff;
    border-radius: 100px;

}
.swiper-button-prev{
    left: 0px;
}

.swiper-button-next{
    right: 0px;
}
.swiper-button-prev::after, .swiper-button-next::after{
    font-size: 20px;
    font-weight: 700;
}

${'' /* swiper styles end */}
`;

const Blogs = () => {
    return (
        <Wrapper>
            <div className="heading">
                <img src={sLine} alt="" />
                <h2>Our Videos</h2>
                <img src={sLine} alt="" />
            </div>

            <div className="blogs-slider">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={110}
                    grabCursor={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="blogs-swiper"
                >


                    <SwiperSlide>
                        <img src={blogImg} alt="" />

                        <div className="slider-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam necessitatibus dolorum accusantium delectus quas sed cum eos nihil error quia, labore, aperiam corrupti consectetur hic libero blanditiis ratione placeat?
                            </p>
                            <a href="#" target="_blank">...more</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={blogImg} alt="" />

                        <div className="slider-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam necessitatibus dolorum accusantium delectus quas sed cum eos nihil error quia, labore, aperiam corrupti consectetur hic libero blanditiis ratione placeat?
                            </p>
                            <a href="#" target="_blank">...more</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={blogImg} alt="" />

                        <div className="slider-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam necessitatibus dolorum accusantium delectus quas sed cum eos nihil error quia, labore, aperiam corrupti consectetur hic libero blanditiis ratione placeat?
                            </p>
                            <a href="#" target="_blank">...more</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={blogImg} alt="" />

                        <div className="slider-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam necessitatibus dolorum accusantium delectus quas sed cum eos nihil error quia, labore, aperiam corrupti consectetur hic libero blanditiis ratione placeat?
                            </p>
                            <a href="#" target="_blank">...more</a>
                        </div>
                    </SwiperSlide>




                    <div className='slider-controller'>
                        <div className="swiper-button-prev">
                        </div>
                        <div className="swiper-button-next">
                        </div>
                    </div>

                </Swiper>
            </div>
        </Wrapper>
    )
}
export default Blogs
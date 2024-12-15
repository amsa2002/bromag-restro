//styled-component imports
import styled from 'styled-components'

//icon imports
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
//swiper imports
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {useState, useEffect} from 'react'
//import api
import {getBanners} from '../../api/bannerSliderApi.js'

const Wrapper = styled.div`
width: 100vw;
height: 90vh;

${'' /* swiper slider styles start */}
.banner-slider{
    width: 100%;
    height: 100%;
}
.swiper {
  width: 100%;
  height: 100%;
}


.banner-swiper-slide{
    color: #fff;
    display: flex;
    align-items: center;
}

h1{
   margin-left: 200px;
   margin-top: -30px;
   font-size: 60px;
   font-weight: 300;
   span{
    font-weight: 600;
    text-transform: uppercase;
   }
}

.swiper-slide h1{
    position: absolute;
}

.slider-controller {
    width: 100%;
    position: relative;
    bottom: 3rem;
}

.swiper-button-prev{
    width: 30px;
    height: 30px;
    color: #fff;
    left: 81%;
}
.swiper-button-prev::after{
    content:'';
}

.swiper-button-next{
    width: 30px;
    height: 30px;
    color: #fff;
    right: 13%;
}
.swiper-button-next::after{
    content:'';
}
.swiper-pagination-fraction{
    width: 10%;
    color: #fff;
    bottom: -15px;
    left: 86%;
}
.swiper-pagination-current{
    color: #FF9D02;
    font-weight: 700;
    font-size: 40px;
}
.swiper-pagination-total{
    font-size: 20px;
    font-weight: 500;
}
${'' /* swiper slider end */}
`;


const BannerSlider = () => {

    const [banners, setBanners] = useState([])
    const [activeSlide, setActiveSlide] = useState(1)

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const data = await getBanners();
                console.log("Banners fetched:", banners);
                setBanners(data);
            } catch {
                console.error("Failed to fetch banners");
            }
        };
        fetchBanners();
    }, [])

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.realIndex + 1)
    }

    return (
        <Wrapper>
            <div className='banner-slider'>
                <Swiper
                    loop={banners.length > 1}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    grabCursor={true}
                    // loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'fraction',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="banner-swiper"
                >
                    {banners.map((banner) => {
                        return(
                            <SwiperSlide
                                className='banner-swiper-slide'
                                style={{ background: `url(${banner.imageUrl}) rgba(0,0,0,0.5)` }}
                                key={banner.id} >
                                <h1 className='slider-heading'>
                                    {banner.title}
                                </h1>
                            </SwiperSlide>
                        )
                    })}
                        

                    <div className='slider-controller'>
                        <div className="swiper-button-prev">
                            <FaArrowLeftLong />
                        </div>
                        <div className="swiper-button-next">
                            <FaArrowRightLong />
                        </div>

                        <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal">
                            <span className="swiper-pagination-current">{activeSlide}</span> /
                            <span className="swiper-pagination-total">{banners.lenght}</span>
                        </div>
                    </div>

                </Swiper>
            </div>
        </Wrapper>
    )
}
export default BannerSlider
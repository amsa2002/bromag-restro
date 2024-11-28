//styled-component imports

//component imports
import { Header, Footer, BannerSlider, About, Blogs, Features, Cuisines, BestOffersSlider, SignatureFoods, ExploreFood, OtherFeatures, Gallery } from '../components'
//image imports
import FullStar from '../assets/images/full-star.svg'
import EmptyStar from '../assets/images/empty-star.svg'
import CouponsAndOffers from '../components/homePageComponents/CouponsAndOffers'



const Home = () => {
    return (
        <div>
            <Header />

            <div className='page-content' style={{ paddingTop: '60px' }}>

                <section>
                    <BannerSlider />
                </section>

                <section className='card-section'>
                    <div className='card'>
                        <div className='card-row'>
                            <h5> Ratings</h5>
                            <p className='serving-from'>serving from</p>
                        </div>
                        <div className='card-row'>
                            <div className='ratings'>
                                <p>4.0</p>
                                <img src={FullStar} alt="" />
                                <img src={FullStar} alt="" />
                                <img src={FullStar} alt="" />
                                <img src={FullStar} alt="" />
                                <img src={EmptyStar} alt="" />
                            </div>
                            <p className='timings'>8:00AM to 11:00PM</p>
                        </div>
                    </div>
                </section>

                <section id='about' className='section'>
                    <About />
                </section>

                <section id='blogs' className='section2'>
                    <Blogs />
                </section>

                <section className='section'>
                    <div className='parent-div'>
                        <div className='left-div'>
                            <h2>Best offers</h2>
                            <p>
                            At Bromag Restro, we bring the best to the table every single day, no matter if it's Monday, Tuesday, or any other day of the week. We understand the art of making your customers feel special, helping you craft irresistible offers that turn every day into an extraordinary experience. With us, delighting your customers becomes a daily tradition!

                            </p>
                        </div>
                        <div className="right-div">
                            <BestOffersSlider />
                        </div>
                    </div>
                    {/* background div's start */}
                    <div className='top-right-bg'>
                        <div className='outer-circle'>
                            <div className='inner-circle'>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-left'></div>
                    {/* background div's end */}
                </section>

                <section id='features' className='section'>
                    <Features />
                </section>


                <section id='menu' className='section2'>
                    <Cuisines />
                </section>

                <section className='section2' style={{ paddingTop: '0px' }}>
                    <CouponsAndOffers />
                </section>

                <section className='section2'>
                    <ExploreFood />
                </section>

                <section className='section'>
                    <OtherFeatures />
                </section>

                <section id='gallery' className='section2'>
                    <Gallery />
                </section>

            </div>

            <Footer />
        </div>
    )
}
export default Home;
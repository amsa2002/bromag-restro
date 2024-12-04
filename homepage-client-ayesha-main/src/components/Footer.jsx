import Wrapper from "../assets/wrappers/Footer"

//import icons
import { FaInstagram, FaWhatsapp,  FaYoutube, FaLinkedin   } from "react-icons/fa";

//image import
import logo from '../assets/images/footer-logo.png'
import { Link } from "react-router-dom";
import playstore_logo from '../assets/images/playstore.png'
import app_logo from '../assets/images/pngegg (5).png'


const Footer = () => {

    return (
        <Wrapper>
            <div className="footer-title">
                <h1>BR<Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><img src={logo} alt="" /></Link>MAG RESTO</h1>
                <p>INTEGRATED FOOD ORDERING AND DELIVERY PLATFORM</p>
            </div>

            <div className="footer-content">
                <div className="footer-buttons">
                    <button>Who We Are</button>
                    <button>TERMS & CONDITIONS</button>
                    <button>What We Do </button>
                    <button>PRIVACY POLICY</button>
                    <button>BROMAG CORPORATE</button>
                    <button>REFUND & CANCELLATION </button>
                </div>
                    <div className="footer-icons">
                        <div className="download-icons">
                            <img src={playstore_logo} alt="" />
                            <img src={app_logo} alt="" />
                        </div>
                        <div className="social-icons">
                            <button className="icon"><FaInstagram /></button>
                            <button className="icon"><FaWhatsapp /></button>
                            <button className="icon"><FaYoutube /></button>
                            <button className="icon"><FaLinkedin /></button>
                        </div>
                    </div>
                <div className="float"></div>
            </div>
            
            {/* <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </Link> */}
            {/* <div className="footer-parent-div">

                <div className="footer-left-div">
                    <h3>
                        contact us
                    </h3>
                    <p>
                        <span>
                            <LiaPhoneSolid />
                        </span>
                        +91 9150289762</p>
                    <p>
                        <span>
                            <CiLocationOn />
                        </span>
                        Chennai,Tamil Nadu</p>
                    <p>
                        <span>
                            <GoMail />
                        </span>
                        mag@bromagindia.com</p>
                </div>
                <div className="footer-right-div">
                    <h3>Enquire Now</h3>
                    <form >
                        <input type="text" placeholder="Enter your name" />
                        <input type="text" placeholder="Enter your email" />
                        <input type="number" placeholder="Enter your mobile number" id="mobile" />
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

            <div className="socials">
                <h3>social links</h3>
                <div className="social-icons">
                    <span className="twitter"><FaTwitter /></span>
                    <span className="facebook"><FaFacebookF /></span>
                    <span className="instagram"><FaInstagram /></span>
                </div>
            </div>

            <div className="copyright">
                <p>
                    © 2024 BIPL, All Rights Reserved.
                </p>
                <p>
                    <a href="#">Privacy Policy</a>{" "}|{" "}
                    <a href="#">Terms & conditions</a>
                </p>
            </div>

            <svg className="svg">
                <clipPath id="clip" clipPathUnits="objectBoundingBox"><path d="M1,0.046 L0.981,0.064 C0.902,0.136,0.807,0.162,0.716,0.135 L0.31,0.015 C0.25,-0.003,0.188,-0.004,0.128,0.012 L0,0.046 V1 H1 V0.046"></path></clipPath>
            </svg> */}
        </Wrapper>
    )
}
export default Footer
import Wrapper from "../assets/wrappers/Footer"

//icon imports
import { LiaPhoneSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

//image import
import logo from '../assets/images/footer-logo.png'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <Wrapper>
            <div className="footer-title">
                <h1>BR<img src={logo} alt="" />MAG RESTO</h1>
                <p>INTEGRATED FOOD ORDERING AND DELIVERY PLATFORM</p>
            </div>

            <div className="footer-content">
                
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
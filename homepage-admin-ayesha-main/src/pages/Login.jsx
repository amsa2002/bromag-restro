// styled-component imports 
import Wrapper from "../assets/Wrappers/Login"
//react imports
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
// react-icon imports 
import { FaEye, FaEyeSlash } from "react-icons/fa6";
//image imports
import logo from '../assets/images/logo.svg'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const navigateOnClick = () => {
        navigate('/dashboard');
    }

    return (
        <Wrapper>
            <form>

                <div className="img-div">
                    <div className="logo-div">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <br />
                    <input type="text" placeholder="enter your username" id="username" />
                </div>

                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <br />

                    <input type={showPassword ? "text" : "password"} placeholder="enter your password" id="password" />
                    <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>

                <div className="btn-div">
                    <button type="submit">
                        Login
                    </button>

                    <button type="button" style={{ marginLeft: "20px" }} onClick={navigateOnClick}>
                        Explore The App
                    </button>
                </div>
            </form>
        </Wrapper>
    )
}
export default Login
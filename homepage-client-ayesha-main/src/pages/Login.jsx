import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import './Style.css'
import signup_logo from '../assets/images/bromag_india_FINAL_BGLESS-01 1.png'

export function Login() {
    const navigate = useNavigate()
    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState('');
    const [isOTPSent, setIsOTPSent] = useState(false)

    const sendOTP = (e) => {
        e.preventDefault()
        axios.post('http://localhost:6003/send-otp', { number })
            .then(() => {
                setIsOTPSent(true);
                console.log('OTP sent successfully');
            })
            .catch((error) => console.error('Error sending OTP:', error))
    };

    const verifyOTP = (e) => {
        e.preventDefault()
        axios.post('http://localhost:6003/verify-otp', { number, otp })
            .then((response) => {
                alert(response.data.message);
                if(response.data.success){
                    window.open('https://restro-gold.vercel.app/', '_blank')
                }
            })
            .catch((error) => console.error('Error verifying OTP:', error))
    };


    return (
        <div className='signuploginpages'>
            <div className='row row-conatiner'>
                <div className="col-md-6">
                    <div className='img-col'>
                        <img src={signup_logo} alt="" />
                    </div> 
                </div>
                <div className='col-md-6'>
                    <div className="container mt-5">
                        <div className=" signup-container">
                        <h3 className="text-center mb-4">Welcome</h3>
                        <p className="text-center mb-4">Please enter your phone number to continue</p>
                            {!isOTPSent ? (
                                <div>
                                    <form>
                                        <div className="mb-3">
                                            <label for="number" className="form-label"><span>*</span> Phone number</label>
                                            <input
                                                type="number"
                                                placeholder="Enter your phone number"
                                                className='form-control'
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                            />
                                            <div className='button'><button onClick={sendOTP} className="btn btn-primary">Login</button></div>
                                        </div>
                                    </form>
                                    <p className="text-center mb-4 color">Already have on account?</p>
                                    <p className="text-center mb-4"><Link to='/register'>Sign Up Now</Link></p>
                                </div>
                            ) : (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />
                                    <button onClick={verifyOTP}>Verify OTP</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

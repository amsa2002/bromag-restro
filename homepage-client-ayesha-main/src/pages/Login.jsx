import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import './Style.css'
import signup_logo from '../assets/images/bromag_india_FINAL_BGLESS-01 1.png'

const backendUrl = import.meta.env.VITE_BACKEND_URL

export function Login() {
    const navigate = useNavigate()
    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isOTPSent, setIsOTPSent] = useState(false)
    const [countdown, setCountdown] = useState(30); // 30 seconds timer
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (isOTPSent && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            setCanResend(true);
        }
    }, [countdown, isOTPSent]);


    const sendOTP = (e) => {
        e.preventDefault()
        axios.post(`${backendUrl}/send-otp`, { number })
            .then(() => {
                setIsOTPSent(true);
                // setCountdown(30); // Reset countdown
                // setCanResend(false); // Disable resend button
                console.log('OTP sent successfully');
            })
            .catch((error) => console.error('Error sending OTP:', error))
    };


    const resendOTP = () => {
        axios.post(`${backendUrl}/send-otp`, { number })
            .then(() => {
                setCountdown(30); // Reset countdown
                setCanResend(false); // Disable resend button
                console.log('OTP resent successfully');
            })
            .catch((error) => console.error('Error resending OTP:', error));
    };

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input box automatically
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const verifyOTP = (e) => {
        e.preventDefault()
        const otpValue = otp.join('');
        axios.post(`${backendUrl}/verify-otp`, { number, otp: otpValue })
            .then((response) => {
                alert(response.data.message);
                if(response.data.success){
                    window.open('https://restro-gold.vercel.app/')
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
                            {!isOTPSent ? (
                                <div>
                                    <h3 className="text-center mb-4">Login</h3>
                                    <p className="text-center mb-4">Please enter your phone number to continue</p>
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
                                    <h3 className="text-center mb-4">OTP Verification</h3>
                                    <p className="text-center mb-4">Enter the 4 digit OTP send to {number}</p>
                                    <div className="otp-input-container">
                                        {otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleOtpChange(e, index)}
                                                id={`otp-input-${index}`}
                                                className="otp-input"
                                            />
                                        ))}
                                    </div>
                                    <div className="resend-btn text-center  mt-3">
                                        <p className="mb-1">You didn’t receive OTP? <span>{countdown > 0 ? `${countdown}s` : ''}</span>
                                        </p>
                                        <button
                                            className="btn-secondary"
                                            onClick={resendOTP}
                                            disabled={!canResend}
                                        >
                                            Resend OTP
                                        </button>
                                    </div>
                                    <div className='button'><button className='btn-primary' onClick={verifyOTP}>Verify & Proceed</button></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

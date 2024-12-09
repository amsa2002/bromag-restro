import React, { useState } from 'react'
import './Style.css'
import signup_logo from '../assets/images/bromag_india_FINAL_BGLESS-01 1.png'

const backendUrl = import.meta.env.VITE_BACKEND_URL;

console.log("Backend URL:", backendUrl);


import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignUp() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try {
         const response = await axios.post(`${backendUrl}/register`, {name, email, number})
         console.log({ name, email, number });
          console.log(response.data)
          navigate('/login')
        } catch (err) {
          setError(err.response?.data?.message || 'Registration failed. please try again.');
        }
        
    }

  return (
    <div className='signuploginpages'>
      <div className='row row-container'>
          <div className="col-md-6 ">
            <div className='img-col'>
              <img src={signup_logo} alt="" />
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="container ">
                <div className="row justify-content-center">
                    <div className=" signup-container">
                      <h3 className="text-center mb-4">Welcome</h3>
                      <p className="text-center mb-4">"Please signup an your account."</p>
                      {error && <p className="text-danger mt-2">{error}</p>}
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <label for="username" className="form-label"><span>*</span> Username</label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username...."
                            onChange={(e) => setName(e.target.value) }
                            required
                            aria-required="true"
                          />
                        </div>
                        <div className="mb-3">
                          <label for="email" className="form-label"><span>*</span> Email Id</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your Mail Id...."
                            onChange={(e) => setEmail(e.target.value) }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="number" className="form-label"><span>*</span> Phone Number</label>
                          <input
                            type="number"
                            className="form-control"
                            id="number"
                            placeholder="Enter your Mobile Number"
                            onChange={(e) => setNumber(e.target.value) }
                            required
                          />
                        </div>
                        
                       <div className='button'> <button type="submit" className="btn btn-primary">Signup</button></div>
                      </form>
                      <p className="text-center mb-4 color">Already have on account?</p>
                      <p className="text-center mb-4"><Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default SignUp
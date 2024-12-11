import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const EmployeeAndRestaurnt = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const response = await axios.post('http://localhost:6003/employee/employee-login', {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('employee_token', response.data.token);
        setMessage('Login successful!');
        window.location.href = 'http://localhost:5175/dashboard'
      }else{
        setError(response.data)
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setMessage('Login failed');
      setError(err.response?.data?.message || 'An error occured. try again later.')
    }
  };



  return (
    <EmployeeAndRestaurntStyled>
        <div className="row row-container justify-content-center">
            <div className="col-md-6">
                <div className='duallogin-container align-items-center '>
                    <h3 className="text-center mb-4">Restaurnt</h3>
                    <p className="text-center mb-4">Please enter the following details to login</p>
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label"><span>*</span> Email</label>
                            <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value) }
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label"><span>*</span> Password</label>
                            <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value) }
                            required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
            <div className="col-md-6">
                <div className='duallogin-container align-items-center '>
                    <h3 className="text-center mb-4">Employee</h3>
                    <p className="text-center mb-4">Please enter the following details to login</p>
                    {error && (<span className="text-danger mt-2" role="alert">{error}</span>)}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="email" className="form-label"><span>*</span> Email</label>
                            <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value) }
                            required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label"><span>*</span> Password</label>
                            <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value) }
                            required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </EmployeeAndRestaurntStyled>
    
  )
}

const EmployeeAndRestaurntStyled = styled.div`

    width: 100%;
    height: 100vh;
    background: radial-gradient(74.39% 74.39% at 50% 50%, #890E06 0%, #000000 100%);
    display: flex;
    justify-content: center; 
    align-items: center;
    font-family: "poppins", serif;

        .duallogin-container{
        width:410px ;
        margin:60px auto;
        color:#FFFF;
        font-family: "poppins", serif;
        }
        .duallogin-containers h3{
            font-size: 40px;
            font-weight: 700;   
        }
        .duallogin-container p{
            font-size: 17px;
            font-weight: 400px;
            padding: 22px 0px 18px 0px;
            color: #DF9300;
        }
        .duallogin-container form{
            border-top: 1px solid #e37e485c;
            padding: 25px 0px;
        }
        .duallogin-container form label span{
            color: #DF9300;
        }
        .duallogin-container form button{
            margin-top: 25px;
            padding: 13px 0px;
            text-transform: uppercase;
        }
        .duallogin-container form input{
            padding: 13px 24px;
            border-radius: 8px;
            border: 0px;
        }
        .duallogin-container form input::placeholder{
            color:#CDCDCD ;
            font-size: 16px;
        }
        .duallogin-container form input:focus{
            outline: none !important;
            box-shadow: none !important;
            
        }

`;

export default EmployeeAndRestaurnt
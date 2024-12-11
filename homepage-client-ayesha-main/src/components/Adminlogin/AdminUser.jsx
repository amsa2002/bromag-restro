import React, {useState} from 'react'
import './Style.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const AdminUser = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        setError('')
        axios.post('http://localhost:6003/admin/adminuser-login', { email, password })
        .then(result=>{console.log(result)
            if(result.data === 'Success'){
                navigate('/mail-info')
            }else{
                setError(result.data)
            }
        })
        .catch((err) => {
            console.error(err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.')
        })
    }

  return (
    <div className="adminlogin-page">
        <div className="row row-container justify-content-center">
            <div className="col-md-6">
                <div className='adminlogin-container align-items-center '>
                    <h3 className="text-center mb-4">Login</h3>
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
    </div>
  )
}

export default AdminUser
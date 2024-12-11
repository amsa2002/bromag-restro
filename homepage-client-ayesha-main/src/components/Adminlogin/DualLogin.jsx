import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import EmployeeAndRestaurnt from './EmployeeAndRestaurnt'

const DualLogin = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const token = queryParams.get('token')

        if (token) {
            axios
                .get(`http://localhost:6003/admin/verify-token?token=${token}`)
                .then(response => {
                    if (response.data.success) {
                        console.log('Token valid, email:', response.data.email)
                    } else {
                        navigate('/admin-login') // Redirect to login if token invalid
                    }
                })
                .catch(err => {
                    console.error(err)
                    navigate('/admin-login')
                });
        } else {
            navigate('/admin-login') // Redirect if no token
        }
    }, [navigate])

    return <div>
        <EmployeeAndRestaurnt/>
    </div>
}

export default DualLogin
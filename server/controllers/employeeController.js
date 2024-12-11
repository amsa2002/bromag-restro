const Employee = require('../modals/employeeModal.js')
const jwt = require('jsonwebtoken')

const employeeLogin = async (req, res) => {

    const {email, password} = req.body

    try {

        const employee = await Employee.findOne({email})
        console.log(employee)
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }

        if(password !== employee.password ){
            return res.status(401).json({message:"Invalid credentials"})
        }

        const token = jwt.sign(
            { id: employee._id, email: employee.email, role: "employee" },
            process.env.EMPLOYEE_JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({
            message: "Employee login successful",
            token,
            employee: { id: employee._id, email: employee.email, name: employee.name },
        })
        
    } catch (err) {
        console.error("Employee login error", err)
        res.status(500).json({message:"server error"})
    }

}

module.exports = {employeeLogin}
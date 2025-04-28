import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import salaryRouter from './routes/salary.js'
import connectToDatabase from './db/db.js'
import leaveRouter from './routes/leave.js'
import attendanceRouter from './routes/attendance.js'
import dashboardRouter from './routes/dashboard.js'
import settingRouter from './routes/setting.js'



connectToDatabase()
const app= express()
app.use(cors())
app.use(express.json())
app.use(express.static('public/uploads'))
app.use('/api/auth',authRouter)
app.use('/api/department',departmentRouter)
app.use('/api/employee',employeeRouter)
app.use('/api/salary', salaryRouter)
app.use('/api/leave', leaveRouter)
app.use('/api/setting', settingRouter)
app.use('/api/attendance', attendanceRouter)
app.use('/api/dashboard', dashboardRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port ${process.env.PORT}`)
}  )


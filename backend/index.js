const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Emp = require('./models/user.model.js')
const jwt = require('jsonwebtoken')


app.use(cors())
app.use(express.json())

//connect to mongoose always use 127.0.0.1 for localhost to avoid errors
mongoose.connect('mongodb://127.0.0.1:27017/employees')



app.post('/api/register', async (req, res) => {
	console.log(req.body)
    try {
        await Emp.create({
            userName: req.body.userName,
            email: req.body.email,
            pasword: req.body.password,
        })
        res.json({ status: "Ok"})
    }
    catch (err) {
        res.json({status: "Duplicate email"})
    }

})

app.post('/api/login', async (req, res) => { 
	
       const user = await Emp.findOne({
            email: req.body.email,
            pasword: req.body.password,
        })
		if (user) {
			const token = jwt.sign({
				email: user.email
			},
			'secret97'
			)
			return res.json({status: 'ok', user: token})
		}
		else {
			return res.json({ status: 'error', user: false})
		}
})


app.listen(3002, () => {
	console.log('Server started on 3002')
})
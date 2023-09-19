const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const EmpList = require('./models/empModel')
const Emp = require('./models/user.model.js')
const jwt = require('jsonwebtoken')


const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employeeData')


app.get('/api/employees', (req, res) => {
  EmpList.find({})
  .then((employees) => {res.send(employees)})
  .catch((err) => res.status(500).send(err))
});

//get emp by id
app.get('/api/employees/:id', async(req, res) => {

  const employeeId = req.params.id;
  EmpList.findById({_id: employeeId})
  .then((employees) => {res.send(employees)})
  .catch((err) => res.status(500).send(err))
});


app.post('/api/employees', async (req, res) => {
  console.log('in post method', req.body)
  try {
    const newEmployees = await EmpList.create({
      image: req.body.image,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    role: req.body.role,
    bio: req.body.bio,
    phone: req.body.phone
  });
  res.json({status: 'good to go'})
}
catch(err) {
  console.error(err);
  res.json({status: 'errrrr'})
}
});

//edit user
app.patch('/api/employees/:id', async (req, res) => {
  const employeeId = req.params.id;
  const updatedEmployee = req.body;
  
  EmpList.findByIdAndUpdate(employeeId, updatedEmployee, { new: true })
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.delete('/api/employees/:id', async (req, res) => {

  const employeeId = req.params.id;
  try {
    const employee = await EmpList.findOneAndDelete({_id: employeeId});
    if (employee) {
      res.json({ message: 'Employee deleted' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

//register user
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

//login user
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
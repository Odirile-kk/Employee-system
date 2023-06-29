const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
const EmpList = require('./models/empModel')


const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employeeData')


app.get('/api/employees', (req, res) => {
console.log(res)
  EmpList.find({})
  .then((employees) => {res.send(employees)})
  .catch((err) => res.status(500).send(err))
});

app.get('/api/employees/:id', (req, res) => {
  const employeeId = req.params.id;
  EmpList.findById(employeeId)
  .then((employees) => {res.send(employees)})
  .catch((err) => res.status(500).send(err))
});


app.post('/api/employees', async (req, res) => {
  console.log('in post method', req.body)
  try {
    const newEmployees = await EmpList.create({
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
  res.json({status: 'errrrr'})
}
});



app.patch('/api/employees/:id', (req, res) => {
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
 
  try {
    const employee = await EmpList.findByIdAndDelete(req.params.id);
    if (employee) {
      res.json({ message: 'Employee deleted' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
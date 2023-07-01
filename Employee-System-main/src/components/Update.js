import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addEmployees, fetchEmployees, updateEmployees } from './api';
// import Link from 'react-router-dom';


const Update = () => {
    
    const inputData = {
        name: '',
        surname: '',
        email: '',
        bio: ' ',
        role: '',
        phone: '',
    }

    const [employee, setEmployee] = useState(inputData);
    const {name, surname, email, bio, role, phone} = employee

    const { id } = useParams()
    const nav = useNavigate();

    // const handleSubmit = async(e) => {
    //   e.preventDefault();
    //   const res = await addEmployees(id, employee)
    //   console.log(res)
    //   nav('/')
    // }

    const loadAll = async() => {
      const response = await fetchEmployees(id);
      setEmployee(response.data);
    }

    useEffect(() => {
      loadAll()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
         axios.patch(`http://localhost:3001/api/employees/`+ employee._id, employee)
         console.log(inputData.id)
        .then(res => {
            alert('succes')
            nav('/')
        })
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/api/employees/` + inputData._id)
    //     .then(res=> setEmployee(res.data))
    //     .catch(err => console.log(err))
    // }, [])


  return (
    <div>
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>

      <div className="form-group">
          <label htmlFor='id'>ID</label>
          <input type='number' disabled name='id' className='form-control' value={employee.id}
          />
          </div>

          <div className="form-group">
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' className='form-control' value={employee.name}
          onChange={e=> setEmployee({...inputData, name: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='surname'>Surname</label>
          <input type='text' name='name' className='form-control' value={employee.surname}
          onChange={e=> setEmployee({...inputData, surname: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='email'>Email</label>
          <input type='email' name='name' className='form-control' value={employee.email}
          onChange={e=> setEmployee({...inputData, email: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='bio'>Bio</label>
          <input type='text' name='name' className='form-control' value={employee.bio}
          onChange={e=> setEmployee({...inputData, bio: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='role'>Role</label>
          <input type='text' name='name' className='form-control' value={employee.role}
          onChange={e=> setEmployee({...inputData, role: e.target.value})}/>
          </div>

          <div className="form-group">
          <label htmlFor='role'>Phone</label>
          <input type='text' name='name' className='form-control' value={employee.phone}
          onChange={e=> setEmployee({...inputData, phone: e.target.value})}/>
          </div>

          <button class="btn btn-success">Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update

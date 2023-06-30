
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { deleteEmployees, updateEmployees } from './employeeSlice';
import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const {id} = useParams();
  const nav = useNavigate();
  const [toggle, setToggle] = useState(true)

  const [inputData, setInputData] = useState({
    id: uuidv4(),
    name: '',
    surname: '',
    email: '',
    bio: ' ',
    role: '',
    phone: '',
})

  useEffect(() => {
    axios.get('http://localhost:3001/api/employees')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  function handleDelete(employeeId) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployees(employeeId));
      window.location.reload()
    }
  }

  return (
  <>
    <div className='parent' style={toggle ? {display: 'block'} : {display: 'none'}}>
      <div className='container mt-5'>
        <div className="addBtn">
          <Link to="/create" className="btn btn-success"><i class="bi bi-person-plus"></i></Link>
        </div >
          <table className="table table-responsive table-borderless table-dark" >
          <thead className="table table-dark text-white">
            <tr>
              <th>#</th>
              <th>
              </th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Bio</th>
              <th>Role</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           
            {data.map((item) => (
              <tr key={item.id}>
                <td></td>
              
                <td>  
                <div className="d-flex align-items-center ">
                    <img id="img" className="rounded-circle"
                      src={item.image} alt={item.image}
                      width="50"
                      height="50"
                    />
                </div>
                </td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.email}</td>
                <td>{item.bio}</td>
                <td>{item.role}</td>
                <td>{item.phone}</td>
                <td>
                <Link to={`/update/${item.id}`} class="btn btn-success"><i class="bi bi-pen"></i></Link>
                {/* <button onClick={() => update(item)} class="btn btn-success"><i class="bi bi-trash3"></i></button> */}
                  <button onClick={e => handleDelete(item.id)} class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

</>
          
  )
}

export default Home

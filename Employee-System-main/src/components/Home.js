
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { deleteEmployees } from './employeeSlice';
import {useDispatch} from 'react-redux'

const Home = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const {id} = useParams();
  const nav = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/employees')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  function handleDelete(employeeId) {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      dispatch(deleteEmployees(id));
    }

  }


  return (
   
    <div className='parent'>
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
           
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
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
                  <button onClick={e => handleDelete(item.id)} class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default Home

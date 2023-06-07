import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Home = ({ selectedImage }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/employee')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  function handleDelete(id) {
    const confirm = window.confirm("Sure?")
    if (confirm) {
      axios.delete(`http://localhost:3001/employee/${id}`)
        .then(res => {
          alert('deleted')
          window.location.reload()
        })
    }

  }

  return (
    <div className='parent'>
    <div className='container mt-5'>
      <div className="addBtn">
        <Link to="/create" className="btn btn-success"><i class="bi bi-person-plus"></i></Link>
      </div >
      <table className="table table-responsive table-borderless table-dark">
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
                  {selectedImage && (
                    <img className="rounded-circle"
                      src={selectedImage} alt="Selected"
                      width="50"
                      height="50"
                    />
                  )}
                  
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
                <button onClick={e => handleDelete(item.id)} class="btn btn-danger"><i class="bi bi-trash3"></i></button>
                <Link to={`/info/${item.id}`} class="btn btn-info"><i class="bi bi-info-lg"></i></Link>
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

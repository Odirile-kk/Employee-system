import { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { addEmployees, fetchEmployees, updateEmployees } from './api';


const Update = () => {

  const [inputData, setInputData] = useState({
    image: '',
    name: '',
    surname: '',
    email: '',
    bio: ' ',
    role: '',
    phone: '',
})

  const { id } = useParams()
  const nav = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
  
      reader.onload = () => {
        const image = reader.result;
        setInputData((inputVal) => ({
          ...inputVal,
          image: image,
        }));
      };
  
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateEmployees(id, inputData)
    console.log(res)
    nav('/home')
  }

  const loadAll = async () => {
    const response = await fetchEmployees(id);
    setInputData(response.data);
  }

  useEffect(() => {
    loadAll()
  }, []);

  return (
    <div style={{
      marginTop: '10%'
  }}>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor='id'>ID</label>
            <input type='number' disabled name='id' className='form-control' value={inputData.id}
            />
          </div>

          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' className='form-control' value={inputData.name}
              onChange={e => setInputData({ ...inputData, name: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor='surname'>Surname</label>
            <input type='text' name='name' className='form-control' value={inputData.surname}
              onChange={e => setInputData({ ...inputData, surname: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input type='email' name='name' className='form-control' value={inputData.email}
              onChange={e => setInputData({ ...inputData, email: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor='bio'>Bio</label>
            <input type='text' name='name' className='form-control' value={inputData.bio}
              onChange={e => setInputData({ ...inputData, bio: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor='role'>Role</label>
            <input type='text' name='name' className='form-control' value={inputData.role}
              onChange={e => setInputData({ ...inputData, role: e.target.value })} />
          </div>

          <div className="form-group">
            <label htmlFor='role'>Phone</label>
            <input type='text' name='name' className='form-control' value={inputData.phone}
              onChange={e => setInputData({ ...inputData, phone: e.target.value })} />
          </div>
          <div>
            <label class="form-label" >Select Image</label>
            <input type="file" accept="image/*" id="image" onChange={handleImageUpload}
            />
          </div>
          <button class="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update

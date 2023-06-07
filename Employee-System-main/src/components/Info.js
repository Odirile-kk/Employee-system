import React from 'react'
import { useState , useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Info = () => {

    const {id} = useParams();
    const [Data, setData] = useState([])
    const nav = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/employee/' + id)
        .then(res => setData(res.data) )
        .catch(err => console.log(err))
    }, [])


    
  return (
    <div className='container'>
      
        <div  >
        <p>{Data.id}</p>
        <p>Name: {Data.name}</p>
        <p>Surname: {Data.surname}</p>
        <p>Email:{Data.email}</p>
        <p>Bio:{Data.bio}</p>
        <p>Role{Data.role}</p>
        <Link to='/' class="btn btn-dark">Back</Link>
        </div>
  
    </div>
  )
}

export default Info

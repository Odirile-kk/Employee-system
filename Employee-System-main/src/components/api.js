import axios from 'axios';

const usersUrl = 'http://localhost:3001/api/employees';

export const fetchEmployees = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addEmployees = async (EmpList) => {
    return await axios.post(`${usersUrl}`, EmpList);
}

export const deleteEmployees = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const updateEmployees = async (id, EmpList) => {
    return await axios.patch(`${usersUrl}/${id}`, EmpList)
}
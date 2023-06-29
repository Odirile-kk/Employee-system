import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

const employeeSlice = createSlice ({
    name: "employees",
    initialState: {
        employees: [],
       loading: false,
       error: null,
    },
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchEmployees.fulfilled, (state, action) => {
            return action.payload;
          })
          .addCase(addEmployees.fulfilled, (state, action) => {
            console.log(action)
            state.push(action.payload);
          })
          .addCase(deleteEmployees.fulfilled, (state, action) => {
            return state.employees.filter((employee) => employee.id !== action.payload);
          })
          .addCase(updateEmployees.fulfilled, (state, action) => {
            const updatedemployees = action.payload;
            const index = state.findIndex((employees) => employees.id === updatedemployees.id);
            if (index !== -1) {
              state[index] = updatedemployees;
              
            }
            
          });
    }
})

export const fetchEmployees = createAsyncThunk('employees/fetchEmployees', async () => {
    const response = await axios.get('http://localhost:3001/api/employees');
    return response.data;
  });
  
  export const addEmployees = createAsyncThunk('employees/addEmployees', async (employee) => {
    const response = await axios.post('http://localhost:3001/api/employees', employee);
    return response.data;
  });
  
  export const deleteEmployees = createAsyncThunk('EmpList/deleteEmployees', async (employeeId) => {
    await axios.delete(`http://localhost:3001/api/employees/${employeeId}`);
    return employeeId;
  });

  export const updateEmployees = createAsyncThunk('employees/updateEmployees', async (employee) => {
    const response = await axios.put(`http://localhost:3001/api/employees/${employee.id}`, employee);
    return response.data;
  });


// export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { getAllEmployees, updateEmployee, deleteEmployee } from '../../services/employeeService.js';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Llama a la función de servicio para obtener empleados cuando el componente se monta
    getAllEmployees()
      .then((data) => {
        setEmployees(data); // Actualiza el estado con los empleados obtenidos
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleDelete = (employeeId) => {
    // Call the deleteEmployee function to delete an employee
    deleteEmployee(employeeId)
      .then(() => {
        // Update the list of employees (you may also want to display a success message)
        setEmployees(employees.filter((employee) => employee.id !== employeeId));
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  return (
    <div>
      <h2>Lista de Elementos</h2>
      {employees.map(employee => (
        <div key={employee.id}>
          <span>Name: {employee.name}</span>
          <span>    </span><span>  </span>
          <span> Email: {employee.email}</span>
          <span>    </span><span>  </span>
          <span> Rol: {employee.rol}</span>
          <span>  </span>
          {/* <button onClick={() => handleDelete(employee.id)}>Update</button> */}
          <span>  </span>
          <button onClick={() => handleDelete(employee.id)}>Delete</button>
        </div>
      ))}
    </div>
  );


}

export default Employees;

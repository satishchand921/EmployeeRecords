package com.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dao.EmployeeDAO;
import com.dto.EmployeeDTO;



public class Service{

	private static final Logger OUT = LoggerFactory.getLogger(Service.class);

	public List<EmployeeDTO> getAllEmployees() throws Exception 
	{
		OUT.debug("getting all employees");
		List<EmployeeDTO> EmployeeDTO = new EmployeeDAO().getAll();
		return EmployeeDTO;
	}
	
	public EmployeeDTO getEmployeeById(int id) throws Exception 
	{
		OUT.debug("geting employee detail by Id: {}", id);
		EmployeeDTO EmployeeDTO = new EmployeeDAO().getById(id);
		return EmployeeDTO;
	}
	public void insertEmployee(EmployeeDTO employee) throws Exception 
	{
		OUT.debug("inserting employee: {}", employee);
		new EmployeeDAO().insert(employee);
	}
	
	public void updateEmployee(EmployeeDTO employee) throws Exception 
	{
		OUT.debug("updating employee: {}", employee);
		new EmployeeDAO().update(employee);
	}
	
	public void deleteEmployeeById(int id) throws Exception 
	{
		OUT.debug("deleting employee by Id: {}", id);
		new EmployeeDAO().delete(id);	
	}

}

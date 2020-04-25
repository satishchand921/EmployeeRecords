package com.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.common.CommonResponse;
import com.common.UriConstant;
import com.dto.EmployeeDTO;

import com.service.Service;


@RestController
public class Controllers {

	private static final Logger OUT = LoggerFactory.getLogger(Controllers.class);

	@RequestMapping(value=UriConstant.GET_ALL_EMPLOYEES, method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonResponse getAllEmployees()
	{	
		OUT.debug("getting all employees");
		CommonResponse commonResponse = new CommonResponse();
		Service em = new Service();
		try 
		{
			commonResponse.setResponseObject( em.getAllEmployees());
		} 
		catch (Exception e) 
		{
			commonResponse.setInternalErrorMessage("internal error");
			e.printStackTrace();
		}
		OUT.debug("Fetched all employees with status: {}", "success");
		commonResponse.setStatus("success");
		return 	commonResponse;
	}

	@RequestMapping(value=UriConstant.GET_EMPLOYEE_BY_ID, method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonResponse getEmployeeById(@PathVariable("id") int id) 
	{
		
		OUT.debug("geting employee detail by Id: {}", id);
		CommonResponse commonResponse = new CommonResponse();
		EmployeeDTO employee;
		try 
		{
			employee = new Service().getEmployeeById(id);
			commonResponse.setResponseObject(employee);
		} 
		catch (Exception e) 
		{
			commonResponse.setResponseObject("internal error");
			e.printStackTrace();
		}
		commonResponse.setStatus("success");
		return commonResponse;
	}

	@RequestMapping(value=UriConstant.INSERT_EMPLOYEE, method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
	public CommonResponse insertEmployee(@RequestBody EmployeeDTO employee)
	{
		OUT.debug("inserting employee: {}", employee);
		CommonResponse commonResponse = new CommonResponse();
		try 
		{
			new Service().insertEmployee(employee);
			commonResponse.setResponseObject(employee);
		} 
		catch (Exception e) 
		{
			commonResponse.setResponseObject("internal error");
			e.printStackTrace();
		}
		commonResponse.setStatus("success");
		return commonResponse;
	}

	@RequestMapping(value=UriConstant.UPDATE_EMPLOYEE, method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE)
	public CommonResponse updateEmployee(@RequestBody EmployeeDTO employee) 
	{
		
		OUT.debug("updating employee: {}", employee);
		CommonResponse commonResponse = new CommonResponse();
		try 
		{
			new Service().updateEmployee(employee);
			commonResponse.setResponseObject(employee);
		} 
		catch (Exception e1) 
		{
			commonResponse.setResponseObject("internal error");
			e1.printStackTrace();
		}
		commonResponse.setStatus("success");
		return commonResponse;
	}

	@RequestMapping(value=UriConstant.DELETE_EMPLOYEE, method=RequestMethod.POST,produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonResponse deleteEmployeeById(@PathVariable("id") int id) 
	{
		
		OUT.debug("deleting employee by Id: {}", id);
		CommonResponse commonResponse = new CommonResponse();
		Service em = new Service();
		try 
		{
			em.deleteEmployeeById(id);
			commonResponse.setResponseObject(id);
		} 
		catch (Exception e1) 
		{
			commonResponse.setResponseObject("internal error");
			e1.printStackTrace();
		}
		commonResponse.setStatus("success");
		return commonResponse;
	}

}

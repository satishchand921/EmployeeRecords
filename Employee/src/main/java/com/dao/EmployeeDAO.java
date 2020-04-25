package com.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.dto.EmployeeDTO;
import com.myBatisUtil.mybatisUtil;

public class EmployeeDAO {

	private static final Logger OUT = LoggerFactory.getLogger(EmployeeDAO.class);
	
	public List<EmployeeDTO> getAll() throws Exception
	{
		SqlSession session = mybatisUtil.getSqlSessionFactory();
		
		List<EmployeeDTO> employeeList = session.selectList("Employees.getAll");
		OUT.debug("fetched all employees count: {}", employeeList != null ? employeeList.size() : 0);
		session.commit();
		session.close();
		return employeeList;
	}

	public EmployeeDTO getById(int id) throws Exception
	{
		SqlSession session = mybatisUtil.getSqlSessionFactory();
		EmployeeDTO employee = (EmployeeDTO) session.selectOne("Employees.getById", id);
		OUT.debug("fetched employee: {}", employee != null ? employee : 0);
		session.commit();
		session.close();
		return employee;
	}

	public void insert(EmployeeDTO employee)throws Exception
	{
		SqlSession session = mybatisUtil.getSqlSessionFactory();
		session.insert("Employees.insert", employee);
		OUT.debug("inserted employee: {}", employee.getName());
		session.commit();
		session.close();
	}

	public void update(EmployeeDTO employee) throws Exception
	{

		SqlSession session = mybatisUtil.getSqlSessionFactory();
		session.update("Employees.update", employee);
		OUT.debug("updated employee: {}", employee.getName());
		session.commit();
		session.close();
	}
	
	public void delete(int id) throws Exception
	{
		SqlSession session = mybatisUtil.getSqlSessionFactory();
		session.delete("Employees.delete", id);
		OUT.debug("deleted employee by Id: {}", id);
		session.commit();
		session.close();
	}

}

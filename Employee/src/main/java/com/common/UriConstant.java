package com.common;

public interface UriConstant {

	public static final String GET_ALL_EMPLOYEES				= "/show";
	public static final String GET_EMPLOYEE_BY_ID				= "/employees/{id}";
	public static final String INSERT_EMPLOYEE					= "/insertEmployee/doAdd";
	public static final String UPDATE_EMPLOYEE					= "/updateEmployee/doMod";
	public static final String DELETE_EMPLOYEE					= "/deleteEmployee/{id}/doDelete";
}

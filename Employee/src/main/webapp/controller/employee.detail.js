(function(){
	"use strict";

	var app = angular.module('ApplicationModule');
app.controller("EmployeeDetailController",['$scope','$state', 'ApplicationUrls', 'CONSTANTS', 'ngEmployeeService', function($scope, $state, ApplicationUrls, CONSTANTS, ngEmployeeService) {

	$scope.employeeObject = {};
	$scope.employeeObject.id = $state.params.empId ? $state.params.empId : 0;
	
	$scope.init = function()
	{
		if($scope.employeeObject.id > 0)
		{
			ngEmployeeService.getDetails($scope.employeeObject.id).then(function(resp)
			{
				$scope.employeeObject = resp.responseObject[0];
			})
		}
	}
	$scope.goBack = function()
	{
		$state.go(ApplicationUrls.SUMMARY)
	}
	
	$scope.submitEmployee = function(isValid)
	{
		if(!isValid)
		{
			return;
		}
		if($scope.employeeObject.id > 0)
		{
			ngEmployeeService.doModify($scope.employeeObject).then(function(resp)
			{
				if(resp.status == CONSTANTS.SUCCESS)
				{
					$state.go(ApplicationUrls.SUMMARY);
				}
			})
		}
		else
		{		
			ngEmployeeService.doAdd($scope.employeeObject).then(function(resp)
			{
				if(resp.status == CONSTANTS.SUCCESS)
				{
					$scope.employeeObject.id = resp.responseObject[0].id;
					$state.go(ApplicationUrls.SUMMARY);
				}
			})
		}
	}
	
	$scope.clear = function() 
	{
		$scope.employeeObject.name = null;
		$scope.employeeObject.age =null;
		$scope.employeeObject.gender = null;
		$scope.employeeObject.id = null;
	}
}]);
})();
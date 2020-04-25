(function (){
    "use strict";
	
	angular.module('ApplicationModule').factory('ngEmployeeService', ['$http', '$q', 'urlConstants', 'CONSTANTS', 'ngAjaxService' , function($http, $q, urlConstants, CONSTANTS, ngAjaxService) {
		return {
			getSummary: function() {
				var deferred = $q.defer();
				ngAjaxService.doAjaxCall(urlConstants.SUMMARY).then(function(resp) {
					if (resp.status == CONSTANTS.SUCCESS)
					{ 
						deferred.resolve(resp);
					}
					else
					{
						showFailureMessage(resp.internalErrorMessage);
						deferred.reject(resp);
					}
					
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			getDetails: function(empId) {
				var deferred = $q.defer();
				ngAjaxService.doAjaxCall(getFormattedURL(urlConstants.GET_EMPLOYEE_BY_ID, empId)).then(function(resp) {
					if (resp.status == CONSTANTS.SUCCESS)
					{
						deferred.resolve(resp);
					}
					else
					{
						showFailureMessage(resp.internalErrorMessage);
						deferred.reject(resp);
					}
					
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			doAdd: function(employeeObject) {
				var deferred = $q.defer();
				ngAjaxService.doAjaxCall(urlConstants.ADD_EMPLOYEE, employeeObject).then(function(resp) {
					if (resp.status == CONSTANTS.SUCCESS)
					{
						deferred.resolve(resp);
					}
					else
					{
						showFailureMessage(resp.internalErrorMessage);
						deferred.reject(resp);
					}
					
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			doModify: function(employeeObject) {
				var deferred = $q.defer();
				ngAjaxService.doAjaxCall(urlConstants.MODIFY_EMPLOYEE, employeeObject).then(function(resp) {
					if (resp.status == CONSTANTS.SUCCESS)
					{
						deferred.resolve(resp);
					}
					else
					{
						showFailureMessage(resp.internalErrorMessage);
						deferred.reject(resp);
					}
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
			doDelete: function(empId) {
				var deferred = $q.defer();
				ngAjaxService.doAjaxCall(getFormattedURL(urlConstants.DELETE_EMPLOYEE, empId)).then(function(resp) {
					
					if (resp.status == CONSTANTS.SUCCESS)
					{
						deferred.resolve(resp);
					}
					else
					{
						showFailureMessage(resp.internalErrorMessage);
						deferred.reject(resp);
					}
					
				}, function(error) {
					deferred.reject(error);
				});
				return deferred.promise;
			},
		};
	}]);
})();
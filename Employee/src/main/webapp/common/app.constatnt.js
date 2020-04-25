angular.module('ApplicationModule').constant("urlConstants", {
		"SUMMARY" 					: "app/show",
		"GET_EMPLOYEE_BY_ID" 		: "app/employees/{id}",
		"ADD_EMPLOYEE" 				: "app/insertEmployee/doAdd",
		"MODIFY_EMPLOYEE" 			: "app/updateEmployee/doMod",
		"DELETE_EMPLOYEE" 			: "app/deleteEmployee/{id}/doDelete",
	})
	.run(function($rootScope, urlConstants) {
		$rootScope.urlConstants = urlConstants;
	});

angular.module('ApplicationModule').constant("LABELS", {
	"NAME" 					: "Name",
	"AGE" 					: "Age",
	"GENDER" 				: "Gender",
})
.run(function($rootScope, LABELS) {
	$rootScope.LABELS = LABELS;
});

angular.module('ApplicationModule').constant("CONSTANTS", {
	"SUCCESS" 				: "success",
	"FAIL" 					: "fail",
	"INTERNAL_ERROR" 		: "internal error",
})
.run(function($rootScope, CONSTANTS) {
	$rootScope.CONSTANTS = CONSTANTS;
});


angular.module('ApplicationModule').constant("ApplicationUrls", {
	"SUMMARY" 					: "summary",
	"ADD_EMPLOYEE" 				: "addEmployee",
	"MODIFY_EMPLOYEE" 			: "modEmployee",
})
.run(function($rootScope, ApplicationUrls) {
	$rootScope.urlConstants = ApplicationUrls;
});
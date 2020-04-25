
var app = angular.module("ApplicationModule");
app.config(['$stateProvider', '$urlRouterProvider', 'ApplicationUrls',  function($stateProvider, $urlRouterProvider, ApplicationUrls) {
	
$urlRouterProvider.otherwise('/summary');	

$stateProvider

.state(ApplicationUrls.SUMMARY, { 
    url : '/summary', 
    templateUrl : "pages/EmployeeSummary.html", 
    controller : "employeeSummaryCtrl"
}) 
.state(ApplicationUrls.ADD_EMPLOYEE, { 
    url : '/addEmployee', 
    templateUrl : "pages/EmployeeDetails.html", 
    controller : "EmployeeDetailController"
})

.state(ApplicationUrls.MODIFY_EMPLOYEE, { 
    url : '/modEmployee', 
    params:      {empId: ''},
    templateUrl : "pages/EmployeeDetails.html", 
    controller : "EmployeeDetailController"
})

}])



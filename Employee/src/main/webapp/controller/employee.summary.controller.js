(function(){
	"use strict";

	var app = angular.module('ApplicationModule');
	
	app.controller("employeeSummaryCtrl",
			['$scope','$state', 'LABELS', 'CONSTANTS', 'ngEmployeeService', function($scope, $state, LABELS, CONSTANTS, ngEmployeeService) {
        
				$scope.employees = [];
				
				/*var systemActionTemplate =  '<div class="ui-grid-cell-contents">';
				systemActionTemplate += '<span>{{row.entity.id}}</span>&nbsp;&nbsp;<a  href="javascript:void(0);" class="fa fa-pencil-square-o" ng-if="row.entity.id > 0" ng-click="grid.appScope.fnModify(row.entity)"></a> ';
				systemActionTemplate +=	'<span>{{row.entity.id}}</span>&nbsp;&nbsp;<a  href="javascript:void(0);" class="fa fa-button-add fa-plus fa-lg" ng-if="row.entity.id > 0" ng-click="grid.appScope.fnDelete(row.entity)"></a> ';;
				systemActionTemplate += '</div>';*/
				
				$scope.gridOptions = {
					enableColumnsResize: true,
				    enableSorting: false,
				    enableFiltering: false,
				    autoResize: true,
				    enableFocusedCellEdit: true,
				    enableCellSelection: true,
				    enableCellEditOnFocus: true,
				    enableColumnMenus: false,
					columnDefs: [
					{ 
						field: 'name',
						name: LABELS.NAME,
						enableColumnMenu: false,
						enableFiltering: true,
						//headerCellClass: 'headerStyle',
						width: "30%",
					},
					{ 
						field: 'age',
						name: LABELS.AGE,
						enableColumnMenu: false,
						enableFiltering: true,
						//headerCellClass: 'headerStyle',
						width: "30%",
					},
					{ 
						field: 'gender',
						name: LABELS.GENDER,
						enableColumnMenu: false,
						enableFiltering: true,
						//headerCellClass: 'headerStyle',
						width: "30%",
					},
					{ 
						name: 'actions',
						/*field: 'gender',*/
						enableFiltering:false,
						cellTemplate:'<button style="background: white;" ng-click=\"grid.appScope.fnModify(row.entity)\"> <i class="fa fa-edit" style="font-size:18px"></i></button>&nbsp <button style="background: white;" ng-click=\"grid.appScope.fnDelete(row.entity)\"> <i class="fa fa-trash" style="font-size:18px" ></i></button>',
						width:"10%"
					}
					],
					onRegisterApi: function (gridApi) {
					$scope.grid1Api = gridApi;
					}};
				$scope.init = function()
				{
					ngEmployeeService.getSummary().then(function(response){
						
						$scope.gridOptions.data = response.responseObject[0];
						
					},function(error){
						 });
				};
			
				$scope.fnModify = function(rowEntity)
				{
					$scope.form = rowEntity;
					$state.go("modEmployee", {empId : rowEntity.id})
				};
				
				
				//HTTP DELETE- delete employee by Id
				$scope.fnDelete = function(roEntity) {
					ngEmployeeService.doDelete(roEntity.id).then(function(resp)
					{
						if (resp.status == CONSTANTS.SUCCESS)
						{
							$scope.init();
						}
					})
				};
			
				$scope.doAdd = function() {
					$state.go("addEmployee");
				};
	}]);
})();
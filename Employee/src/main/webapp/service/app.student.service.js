/*app.service('studentService',function($http){

	this.getAll = function () {
	    return $http.get("pages/rest/show");
	};
	
	this.addStudent = function (student) {
	    var response = $http({
	        method: "post",
	        url: "pages/rest/add",
	        data : angular.toJson(student),
			headers : {
				'Content-Type' : 'application/json'
			}
	    });
	    return response;
	}
	
	this.deleteStudent = function(id){
		var response = $http({
			method: "post",
			url: "pages/rest/delete/"+id,
			data : angular.toJson(id),
			headers :{
				'Content-Type' :'application/json'
			}
		});
		return response;
	}
	
	this.sortedStudent = function () {
	    return $http.get("pages/rest/sort");
	}
	
	this.sortedStudentDsc = function () {
	    return $http.get("pages/rest/sortDsc");
	}
	
	this.editStudent = function (student) {
	    var response = $http({
	        method: "post",
	        url: "pages/rest/edit",
	        data : angular.toJson(student),
			headers : {
				'Content-Type' : 'application/json'
			}
	    });
	    return response;
	}
	
	this.getDataById = function(id){
		var response = $http({
			method: "post",
			url: "pages/rest/dataById/"+id,
			data : angular.toJson(id),
			headers :{
				'Content-Type' :'application/json'
			}
		});
		return response;
	}
})*/
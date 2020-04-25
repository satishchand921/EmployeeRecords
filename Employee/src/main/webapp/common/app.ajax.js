(function() {

    "use strict";
	angular.module('ApplicationModule').factory('ngAjaxService', ['$http', '$q', '$location', '$window', '$state','$timeout',
	                                                              function ($http, $q, $location, $window, $state, $timeout){
		return {
				doAjaxCall: function (url, param) {
				var deferred = $q.defer();
				var errorMsg = "";
				var platform_url = "";
				$http({
						method: 'POST',
						url: url,
						data: param,
						dataType : "JSONP"
						
				  }).then(function (response){
					  	deferred.resolve(response.data);
				   },function (error){
					    deferred.reject(errorMsg);
				   });
				/*return $http.get("pages/rest/show");*/
					return deferred.promise;
				}
			};
	}]);
	
	/*angular.module('ApplicationModule').factory('ngFileUploadService', ['$http', '$q', function ($http, $q) {
		
		return {
		    uploadFileToUrl : function(url, file, data) {
		    	var deferred = $q.defer();
		    	var fd = new FormData();
		    	fd.append('logo', file.size > 0 ? file : new Blob());
		    	if(data && data.length > 0)
		    	{
		    		angular.forEach(data, function(value, key){
		    			fd.append(key, value);
		    		});
		    	}
		    	$http.post(url, fd, {
		    		transformRequest: angular.identity,
		            headers: {'Content-Type': "multipart/form-data"}
		    	})
		    	.success(function(resp) {
		    		deferred.resolve(resp);
		    	})
		    	.error(function(error) {
		    		deferred.reject(error);
		    	});
		    	
		    	return deferred.promise;
		    },
		    uploadFileExcelToUrl : function(url, file, data) {
		    	var deferred = $q.defer();
		    	var fd = new FormData();
		    	fd.append('uploadData', file.size > 0 ? file : new Blob());
		    	if(data && data.length > 0)
		    	{
		    		angular.forEach(data, function(value, key){
		    			fd.append(key, value);
		    		});
		    	}
		    	$http.post(url, fd, {
		    		transformRequest: angular.identity,
		            headers: {'Content-Type': "multipart/form-data"}
		    	})
		    	.success(function(resp) {
		    		deferred.resolve(resp);
		    	})
		    	.error(function(error) {
		    		deferred.reject(error);
		    	});
		    	
		    	return deferred.promise;
		    },
		    uploadFilesToUrl : function(url, file, fileName, data) {
		    	var deferred = $q.defer();
		    	var fd = new FormData();
		    	fd.append(fileName, file.size > 0 ? file : new Blob());
		    	if(data != undefined)
		    	{
		    		fd.append("param",new Blob([angular.toJson(data)], {
		                type: "application/json"
		            }));
		    	}
		    	$http.post(url, fd, {
		    		transformRequest: angular.identity,
		            headers: {'Content-Type': "multipart/form-data"}
		    	})
		    	.success(function(resp) {
		    		deferred.resolve(resp);
		    	})
		    	.error(function(error) {
		    		deferred.reject(error);
		    	});
		    	
		    	return deferred.promise;
		    }
		};
		
	}
	]);*/
	
})();
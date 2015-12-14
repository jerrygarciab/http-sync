function () {
	'use strict';
	
	/**
	 * @ngdoc function
	 * @name httpSyncApp.factory:$http-sync
	 * @description
	 * # This is the main service, in this factory the magic takes place
	 * # here, you'll be able to do the http request but blocking
	 * # the rest of the code, we'll use promises here but in the 
	 * # controller you'll see sequencial programing.
	 * # would be returned in order
	 */
	angular.module('httpSyncApp.factories')
		.factory('$http-sync', $http-sync);

	//Dependency Injector
	$http-sync.$inject['$http'];

	//Main Controller function
	function $http-sync ($http) {
		var factory = {
			httpGet: httpGet,
			httpPost: httpPost,
			httpPut: httpPut,
			httpDelete: httpDelete
		};

		return factory;


		///// -- Factory Functions -- /////

		function httpGet (url, params) {
			params = params || 0;

			var getResults = $http.get(url)
								.then(httpGetSuccess, httpGetFailure);

			return getResults;
		}

		function httpPost (url, params) {
			params = params || 0;

			var postResults;

		}

		function httpPut (url, params) {
			params = params || 0;

			var putResults;

			return putResults;
		}

		function httpDelete (url, params) {
			params = params || 0;

			var deleteResults;

			return deleteResults;
		}

		///// -- Promise Handling Functions -- /////

		function httpGetSuccess (data) {
			return data;
		}

		function httpGetFailure (error) {
			console.log('Error: ' + error);

			return error;
		}

		function httpPostSuccess (data) {
			return data;
		}

		function httpPostFailure (error) {
			console.log('Error: ' + error);
			
			return error;
		}

		function httpPutSuccess (data) {
			return data;
		}

		function httpPutFailure (error) {
			console.log('Error: ' + error);
			
			return error;
		}

		function httpDeleteSuccess (data) {
			return data;
		}

		function httpDeleteFailure (error) {
			console.log('Error: ' + error);
			
			return error;
		}
		
	}
}();
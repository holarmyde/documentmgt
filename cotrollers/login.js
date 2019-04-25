// JavaScript Document
myApp.controller("loginCtrl", function($scope, $http, $location){
	$scope.username ="";
	$scope.thePassword = "";
	
	
	$scope.loginBtn = function()
	{
		if($scope.username=="")
		{
			alert("you have not entered the usernme");
			
		} else if($scope.thePassword=="")
		{
			alert("You have not entered the password");	
		}else
		{
			user = {"username":$scope.username, "thePassword":$scope.thePassword};
			$http.post("backend/sqlprocessor.php?authentication=yes", user)
			.success(function(response){
				if(response.status=='ok'){
					$location.path();
					
					
					
					}
				})
			.error();
			
			
		}
		
		
		
		
	}
	
	});
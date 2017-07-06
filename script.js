// Code goes here

/*
(function() {

  var worker = function() {

    var task1 = function() {
      console.log("Do job 1");
    };

    var task2 = function() {
      console.log("Do job 2");
    };

    return {
      job1: task1,
      job2: task2
    };

}; 
  var jobs = worker();
  jobs.job1();
  jobs.job1();
  jobs.job2();
  

}());
*/

(function(){
  
var app = angular.module("demo", []);
app.controller("world", function($scope, $http) {
  /*var dev = {
    firstname: "Chris",
    lastname: "Valladares",
    img: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjaAAAAJDlkNGJhNjcwLWQ4YjYtNGIxNi05YmEzLTA1YTI3NDE0OGFlNw.jpg"
  };*/
  
var onUserComplete = function(response){
  $scope.user = response.data;
};

var error = function(error){
  $scope.error = "User may not exist";
};

  $http.get("https://api.github.com/users/vallchri10")
    .then(onUserComplete, error);
  $scope.message = "Hello, AngularJS";
  //$scope.developer = dev;
});

}());
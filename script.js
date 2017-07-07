// AngularJS Practice

/*

Writting code using IIFE in JavaScript (Immediately-Invoked Funtion Expression)
This will execute immediately on run-time will help with polluting global variables
and even overriding things.

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

(function() {

  var app = angular.module("demo", []);
  app.controller("world", function($scope, $http) {
    /* 
    Hardcoded information to test out how AngularJS Works. 
    This is will display a user fullname and image.
  
    var dev = {
      firstname: "Chris",
      lastname: "Valladares",
      img: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjaAAAAJDlkNGJhNjcwLWQ4YjYtNGIxNi05YmEzLTA1YTI3NDE0OGFlNw.jpg"
    };
    */

    /*
    The promise will get information and then assert to onUserComplete if successful
    but in failure it will go to the error method and display a message.
    This is the benefits of AngularJS because it deals with asynchronous tasks.
    */
    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, error);
    };

    /*
    Promise
    When getting the user information is complete, get their repository information
    and then go onRepos method else give an error if something went wrong.
    */
    var onUserComplete = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
        .then(onRepos, error);
    };

    /*
    If anything went wrong upon retriving information
    throw an error to the user.
    */
    var error = function(error) {
      $scope.error = "Could Not Fetch Data.";
    };

    /*
    When onUserComplete is successful use the reponse data and insert it to
    $scope.repos to display information on the front-end.
    */
    var onRepos = function(reponse) {
      $scope.repos = reponse.data;
    };
    
    /*
    newOrder is set to order the items in the beginning by language
    but we also give the user the opportunity to order it by any way they wont
    on the fron end 
    */
    $scope.newOrder = "+language";
    
    $scope.message = "GitHub Viewer";
    $scope.username = "Angular";
    //$scope.developer = dev;
    
  });

}());
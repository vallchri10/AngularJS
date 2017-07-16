// AngularJS Practice

/*
Writing code using IIFE in JavaScript (Immediately-Invoked Function Expression)
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

  var app = angular.module("demo");

  var MainController = function(
    $scope, $interval, $location) {


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
      if (countInterval) {
        $interval.cancel(countInterval);
        $scope.startCountDown = null;
      }
      $location.path("/user/" +username);
    };


    var decrementCount = function() {
      $scope.startCountDown -= 1;
      if ($scope.startCountDown < 1) {
        $scope.search($scope.username);
      }
    };

    var countInterval = null;
    var count = function() {
      countInterval = $interval(decrementCount, 1000, $scope.startCountDown);
    };

    /*
    newOrder is set to order the items in the beginning by language
    but we also give the user the opportunity to order it by any way they wont
    on the front end
    */

    //$scope.developer = dev;
    $scope.username = "Angular";
    $scope.startCountDown = 30;
    count();

  };
  app.controller("MainController", MainController);

}());
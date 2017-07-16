/**
 * Created by chris on 7/16/17.
 */
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

    var UserController = function(
        $scope, github, $routeParams) {

        /*
         Promise
         When getting the user information is complete, get their repository information
         and then go onRepos method else give an error if something went wrong.
         */
        var onUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, error);
        };

        /*
         When onUserComplete is successful use the response data and insert it to
         $scope.repos to display information on the front-end.
         */
        var onRepos = function(data) {
            $scope.repos = data;
            /*
             location gets the information of where to look with an id of userDetails
             and then scrolls to that location.
             */

        };

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
         If anything went wrong upon retrieving information
         throw an error to the user.
         */
        var error = function(error) {
            $scope.error = "Could Not Fetch Data.";
        };
        /*
         newOrder is set to order the items in the beginning by language
         but we also give the user the opportunity to order it by any way they wont
         on the front end
         */
        //$scope.developer = dev;
        $scope.newOrder = "+language";
        $scope.username = $routeParams.username;
        github.getUser($scope.username).then(onUserComplete, error);
    };
    app.controller("UserController", UserController);

}());
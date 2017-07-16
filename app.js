/**
 * Created by chris on 7/16/17.
 */

(function(){

    // Here we are saying that this module is dependent on ngRoute.
    var app = angular.module("demo" ,["ngRoute"]);

    app.config(function($routeProvider){
        // If this user come to this route of the application
        // then go to this controller with this view
        $routeProvider
            .when("/main", {
            templateUrl: "main.html",
            controller: "MainController"
            })
            .when("/user/:username", {
                templateUrl: "user.html",
                controller: "UserController"
            })
            .when("/repo/:username/:reponame" , {
                templateUrl: "repo.html",
                controller: "RepoController"
            })
        // If for some reason URL is unknown redirect to main.
            .otherwise({redirectTo: "/main"});

    });

}());

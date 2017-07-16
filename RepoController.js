/**
 * Created by chris on 7/16/17.
 */
(function(){

    var module = angular.module("demo");

    var RepoController = function($scope, $routeParams, github) {

        var onRepo = function(data){
            $scope.repo = data;
        };

        var onError = function(reason){
            $scope.error = reason;
        };
        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);

    };
    module.controller("RepoController", RepoController);

}());

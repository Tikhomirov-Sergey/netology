'use strict'

userApp.controller('UserDetailCtrl', function ($scope, $routeParams, UsersService, PostsService) {
  $scope.userLoaded = false

  let userId = $routeParams['userId'];

  $scope.user = UsersService.get({userId}, function (successResult) {
    // Окей!
    console.log(successResult)
    $scope.notfoundError = false
    $scope.userLoaded = true

    $scope.posts = PostsService.getPostsByUserId().query({userId})

  }, function (errorResult) {
    // Не окей..
    $scope.notfoundError = true
    $scope.userLoaded = true
  })

  $scope.user.$promise.then(function (result) {
    // $scope.userLoaded = true
  })

  $scope.deleteUser = function (userId) {
    $scope.user.$delete({
      userId: userId
    }, function (successResult) {
      // Окей!
      $scope.deletionSuccess = true
    }, function (errorResult) {
      // Не окей..
      $scope.deletionError = true
    })
  }
})

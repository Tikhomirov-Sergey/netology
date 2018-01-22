'use strict'

userApp.controller('EditUserCtrl', function ($scope, UsersService, $routeParams) {

  $scope.buttonName = "Сохранить изменения";
  $scope.userLoaded = false;

  let userId = $routeParams['userId'];

  UsersService.getUser(userId).then(function (response) {
    $scope.user = response.data
    $scope.userLoaded = true
  })

  $scope.user = {}

  $scope.buttonEvent = function (myUser) {
    $scope.creationSuccess = false

    UsersService.editUser(myUser, userId).then(function (response) {
      $scope.newUser = {};
      
      $scope.message = `Пользователь ${userId} изменен`;
      $scope.creationSuccess = true;
      $scope.closeForm = true;
    })
  }
})

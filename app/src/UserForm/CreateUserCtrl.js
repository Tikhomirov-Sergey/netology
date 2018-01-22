'use strict'

userApp.controller('CreateUserCtrl', function ($scope, UsersService) {

  $scope.userLoaded = true;
  $scope.buttonName = "Добавить";
  
  $scope.user = {}

  $scope.buttonEvent = function (myUser) {
    $scope.creationSuccess = false

    UsersService.createUser(myUser).then(function (response) {
      $scope.newUser = {};

      $scope.message = `Привет, пользователь ${response.data.id}`;
      $scope.creationSuccess = true
    })
  }
})

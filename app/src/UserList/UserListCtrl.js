'use strict'

userApp.controller('UserListCtrl', function ($scope, $q, UsersService, PostsService) {

  $q.all({

    users: UsersService.getUsers(),
    posts: PostsService.getPosts()

  }).then(function(values){

    $scope.users = values.users.data;
    $scope.posts = values.posts.data;
    
  });

})

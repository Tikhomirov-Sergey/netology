angular
  .module('UserApp')
  .factory('PostsService', function ($resource, $http) {


    class Posts {
      getAllPosts() {
       return $resource('https://jsonplaceholder.typicode.com/posts/');
      }
  
      getPostsByUserId() {
        return $resource(' https://jsonplaceholder.typicode.com/users/:userId/posts/', {
          userId: '@userId'
       })
      }
    }
  
    return new Posts();
  }
)

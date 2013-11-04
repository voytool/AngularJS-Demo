function CatListCtrl($scope, $http) {
  $http.get('../cats/cats.json').success(function(data) {
    $scope.cats = data;
  });
}

//CatListCtrl.$inject = ['$scope', '$http'];
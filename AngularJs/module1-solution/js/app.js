(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']

  function LunchCheckController($scope) {

    // Function to count number of items from input

    $scope.countItems = function (items) {
      //, , is not an item
      var count = 0;
      if (items === "")
        return 0;
      if (items !== undefined) {
        var array = items.split(',');
        for (var i = 0; i < array.length; i++) {
          if (array[i].trim() !== "")
            count++;
        }
      }
      return count;
    };

    // Function to display appropriate message

    $scope.showMessage = function () {
      var dishCount = $scope.countItems($scope.dishes);
      if (dishCount < 1) {
        $scope.message = "Please enter data first";
        $scope.colChange = {
          "color": "red"
        };
        $scope.borChange = {
          "border-color": "red"
        };
      } else if (dishCount <= 3) {
        $scope.message = "Enjoy!";
        $scope.applyColor();
      } else {
        $scope.message = "Too much!";
        $scope.applyColor();
      }
    }

    // Function to apply Color to message and border

    $scope.applyColor = function () {
      $scope.colChange = {
        "color": 'green'
      };
      $scope.borChange = {
        "border-color": "green"
      };
    }
  };

})();
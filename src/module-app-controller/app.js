var angularApp = angular.module('angularApp', []);

// CUSTOM DIRECTIVE
angularApp.directive('searchResult', function () {
  return {
    templateUrl: 'directives/search-result.html',
    scope: {
      line: '@',
      rPerson: '=',
      rPrintFullName: '&',
    },
  };
});

// MODULE
// create a service, it becomes a singleton
angularApp.service('GlobalData', [
  '$log',
  function ($log) {
    this.name = 'Initial data';
    this.getFullName = function () {
      // $log.warn(this.name);
      return `A fullname is:  ${this.name}`;
    };
  },
]);

// CONTROLLERS
angularApp.controller('mainController', [
  '$scope',
  '$log',
  '$timeout',
  '$interval',
  'GlobalData',
  function ($scope, $log, $timeout, $interval, GlobalData) {
    // init name variable in the $scope from GlobalData
    $scope.name = GlobalData.name;
    // $log.info(GlobalData.getFullName());

    $scope.headline = "Parent's $scope";
    $scope.person = {
      firstName: 'John',
      lastName: 'Doe',
      street: '123333 Main str',
      ward: '12',
    };
    $scope.printFullName = function (person) {
      const time = Date.now();
      console.log(`Passing to `, time);
      return 'person.firstName: ' + time;
    };
    // we watch variable name in $scope, everytime its value changed, we update GlobalData to share across our Application
    $scope.$watch('name', function () {
      // set global data
      // console.log('watch happened');
      GlobalData.name = $scope.name;
    });

    setInterval(function () {
      // debugger;
      return;
      $scope.$apply(
        function () {
          console.log(this);
          $scope.name = `${Date.now()}`;
        }.bind($scope),
      );
    }, 1000);
  },
]);

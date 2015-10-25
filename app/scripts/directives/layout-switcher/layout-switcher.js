'use strict';

/**
 * @ngdoc function
 * @name livingwalldesignerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the livingwalldesignerApp
 */
angular.module('livingwalldesignerApp')
  .directive('layoutSwitcher', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        considerationsTemplate: '=',
        previewTemplate: '=',
        orientationVertical: '='
      },
      templateUrl: 'scripts/directives/layout-switcher/layout-switcher.html',
      // templateUrl: function (element, attrs) {
      //   console.log(element, attrs);
      //   return 'scripts/directives/layout-switcher/'+attrs.orientation+'-layout.html';
      // },
      link: function (scope) {
        console.log(scope);
        scope.$watch('orientationVertical', function (newOrientation) {
          console.log('idk', newOrientation);
        });

        scope.includeSrc = function () {
          if (scope.orientationVertical) {
            return 'scripts/directives/layout-switcher/vertical-layout.html';
          } else {
            return 'scripts/directives/layout-switcher/horizontal-layout.html';
          }
        }
      }
    }
  });
'use strict';

/**
 * Kitten directive.
 */
var Kitten = function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      catBreed: '=',
      catCountry: '=',
      catImg: '='
    },
    templateUrl: 'templates/directives/kitten.ng'
  };
};

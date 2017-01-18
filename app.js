;(function(window){
  angular.module('app', [])
  .directive('tab', function(){
    return{
      restrict: 'E',//the directive will be an element
      transclude: true,
      template: '<h2>Hello World!</h2> <div role="tabpanel" ng-transclude></div>',
      scope: { },
      link: function(scope, elem, attr) {}
    }
  })
})(window);

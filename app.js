;(function(window){
  angular.module('app', [])
  .directive('tab', function(){
    return{
      restrict: 'E',//the directive will be an element
      transclude: true,
      template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
      require: '^tabset',
      scope: {
        heading: '@'//this symbol means that this property has to be a string
      },
      link: function(scope, elem, attr, tabsetCtrl) {
        scope.active = false;
        tabsetCtrl.addTab(scope);
      }
    }
  })
  .directive('tabset', function(){
    return {
      restrict: 'E',//restricting an element
      transclude: true,//lets include a document inside of another(inserting it insode of another element)
      scope: { },
      templateUrl: 'tabset.html',
      bindToController: true,
      controllerAs: 'tabset',
      controller: function() {
        var self = this;
        self.tabs = [];
        self.addTab = function addTab(tab){
          self.tabs.push(tab);

          if (self.tabs.length === 1) {
            tab.active = true;
        }
      }
      self.select = function(selectedTab){
        angular.forEach(self.tabs, function(tab) {
          if(tab.active && tab !== selectedTab) {
            tab.active = false;
          }
        });
        selectedTab.active = true;
      }
    }
  }
 });
})(window);

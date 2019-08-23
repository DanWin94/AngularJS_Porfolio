var app = angular.module("app", ['ngRoute', 'ui.bootstrap','ngMap']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: './pages/home.html',
    
  })

  .when('/home', {
    templateUrl: './pages/home.html',
  })

  .when('/aboutme', {
    templateUrl: './pages/aboutme.html',
  })
  .when('/photography', {
    templateUrl: './pages/photography.html',
    controller: 'SlideController'
  })
  .when('/experience', {
    templateUrl: './pages/experience.html',

  })
  .when('/contactme', {
    templateUrl: './pages/contactme.html',
    

  })
    .otherwise({
      redirectTo: './home'
    });
});



function Ctrl($scope,$route,$routeParams) { 
            //see injecting additionaly to have acces to them
  
  $scope.slides = [];
   $scope.slides.push({
    url: './gallery/bridge.png',
    image: './gallery/bridge.png'
  });
  $scope.slides.push({
    url: './gallery/chicago.png',
    image: './gallery/chicago.png'
  });
  $scope.slides.push({
    url: './gallery/ponce.png',
    image: './gallery/ponce.png'
  });
  $scope.slides.push({
    url: './gallery/atl.png',
    image: './gallery/atl.png'
  });
  $scope.slides.push({
    url: './gallery/person.png',
    image: './gallery/person.png'
  
  });
  $scope.slides.push({
    url: './gallery/person2.png',
    image: './gallery/person2.png'
  });
   $scope.slides.push({
    url: './gallery/couple.png',
    image: './gallery/couple.png'
  });
   $scope.slides.push({
    url: './gallery/person3.png',
    image: './gallery/person3.png'
  });

  $scope.setActive = function(idx) {
    $scope.slides[idx].active = true;
  };
  
  //runing every tim controller is accessed
  $scope.setActive($route.current.params.slide || 0);

}
app.controller('SlideController', function($scope) {

});

  




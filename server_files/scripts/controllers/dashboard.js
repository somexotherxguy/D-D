app.controller('dashboard', ['$scope', function($scope) {
    // this is where stuff goes
    $scope.character = {};
    $scope.test = ["bob", "billy", "Jim"];
    $scope.load = function() {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/id/"+localStorage.getItem('userID')+"/new_object.json", true);
      xhttp.send();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(JSON.parse(this.response))
          $scope.character = JSON.parse(this.response);
          //console.log($scope.character_json);
          //$scope.character.split(', ');
          //$scope.character.replace(/[^\w\s!?]/g,'')
        }
      }
    };
    //$scope.load();
}]);
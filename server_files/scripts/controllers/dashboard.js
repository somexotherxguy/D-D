app.controller('dashboard', ['$scope', '$location', function($scope, $location) {
    // this is where stuff goes
    //$scope.character_json;
    $scope.character_json;
    $scope.test = ["bob", "billy", "Jim"];
    $scope.init_load = function() {
   	  console.log(localStorage.getItem('userID'));
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/id/"+localStorage.getItem('userID')+"/new_object.json", true);
      xhttp.send();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(typeOf(this.response));
          console.log(this.response);
          $scope.character_json = JSON.parse(this.response);
          //console.log($scope.character_json);
          //$scope.character.split(', ');
          //$scope.character.replace(/[^\w\s!?]/g,'')
          for(i in $scope.character_json){
          	console.log($scope.character_json[i]);
          }
          $scope.$apply();
        }
      }
    };
    
    $scope.load_character = function(char_name) {
    	localStorage.setItem('charID', char_name);
    	//$location.path('#/creator');
    };
    $scope.init_load();
    //$scope.delete_charr();

}]);
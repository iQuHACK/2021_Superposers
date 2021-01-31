angular.module('voteApp', [])
  .controller('voteCtrl', function($scope, $http) {
    // spinner state to display / hide during GET request
    $scope.loading = false;

    $scope.maps = {
      '1': { 
        mapId: 1,
        title: '',
        description: '',
        thumbnail: '',
        votes: 0
      },
      '2': { 
        mapId: 2,
        title: '',
        description: '',
        thumbnail: '',
        votes: 0
      },
      '3': { 
        mapId: 3,
        title: '',
        description: '',
        thumbnail: '',
        votes: 0
      },
      '4': { 
        mapId: 4,
        title: '',
        description: '',
        thumbnail: '',
        votes: 0
      },
    };

    // load map data from server
    $scope.fetchData = function() {
      var serverData;
      $http.get('getAllMaps')
      .then(function(response) {
        serverData = response.data;
        console.log('🍊 successful server request', serverData);
      },
      function(response) {
        console.log('🍊 err from server request', response);
      })
      .then(function() {
        serverData.forEach(function(obj) {
          $scope.maps[obj.mapId] = obj;
        });
        console.log('🍊 after transform, $scope.maps is', $scope.maps);
      });
    };
    $scope.fetchData();

    // post votes to server
    $scope.postVotes = function() {
      $scope.loading = true;
      var data = [];

      for (var key in $scope.maps) {
        data.push($scope.maps[key]);
      }
      console.log('🍊 data to send to server is', data);
      $http.post('saveMaps', data)
        .then(function(response) {
          console.log('🍊 response from server', response.data);
          $scope.loading = false;
        },
        function(response) {
          console.log('🍊 err from server post request', response);
          $scope.loading = false;
        });
    };

    /* helpers for card display -------------------------------------- */
    $scope.getMapTitle = function(mapNum) {
      return $scope.maps[mapNum].title;
    };

    $scope.getVotes = function(mapNum) {
      return $scope.maps[mapNum].votes;
      console.log(`🍊  getVotes called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };

    $scope.upvote = function(mapNum) {
      var currVotes = $scope.maps[mapNum].votes;
      if (currVotes < Number.MAX_VALUE) {
        $scope.maps[mapNum].votes += 1;
      }
      console.log(`🍊  upvote called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };

    $scope.downvote = function(mapNum) {
      var currVotes = $scope.maps[mapNum].votes;
      if (currVotes > 0) {
        $scope.maps[mapNum].votes -= 1;
      }
      console.log(`🍊  downvote called, curr votes of map ${mapNum} is: ${$scope.maps[mapNum].votes}`);
    };
  });
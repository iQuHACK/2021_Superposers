    /* timers for saving votes -------------------------------------- */
    var scheduleNextVoteSave = function() {
      $scope.postVotes();
      generateRandomVoteSaveTimeoutID = setTimeout(
        scheduleNextVoteSave, Math.random() * 5000
        );
    };
    // scheduleNextVoteSave();

    // Stop the auto-generated tweets after 1 minute
    var cancelScheduleNextVoteSave = function() {
      setTimeout(function() {
        clearTimeout(generateRandomVoteSaveTimeoutID);
      }, 60000);
    };
    // cancelScheduleNextVoteSave();
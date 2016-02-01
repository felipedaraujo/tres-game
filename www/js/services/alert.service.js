angular.module('starter.services')
  .service('Alert', function($window) {

    this.youWin = function() {
      swal({
        title: "You win!",
        type: "success",
        showCancelButton: true,
        confirmButtonText:"Play again",
        cancelButtonText:"Quit"
      }, function(isConfirm) {
        if (isConfirm) {
          $window.location.reload();
        } else {
          $window.location.href = '#/home';
        }
      });
    }

    this.noMatchAvailable = function(){
      swal({
        title: "No match available.",
        type: "warning"
      });
    }

    this.leaveGame = function(){
      swal({
        title: "Quit game?",
        type: "warning",
        showCancelButton: true
      }, function() {
        $window.location.href = '#/home';
      });
    }
  })
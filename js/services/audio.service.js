angular.module('starter.services')
  .service('Audio', function($ionicPlatform, MediaFactory) {

    var medias = [];

    this.play = function(track) {
      MediaFactory.loadMedia('audio/' + track + '.mp3')
        .then(function(media){
          medias[track] = media;
          medias[track].play();
        });
    };

    this.stop = function(track) {
      medias[track].stop();
    }
  });
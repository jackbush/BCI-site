'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$window', 'socketFactory',
  function($scope, $window, socketFactory) {
    $scope.check = false;
    $scope.toggleEeg = function() {
        $scope.check = $scope.check === false ? true : false;
    };
    // FOR TESTING CONNECTION
    // var socket = io.connect();
    // socket.on('connect', function() {
    //   console.log('EEG SOCKET CONNECTED');
    // });
    // try {
    //   var socket = io.connect('http://localhost:9876');
    // } catch {
    //   var socket = io.connect();
    // }
    // // var socket = io.connect('http://localhost:9876');
    // socket.on('eeg', function(data) {
    //   console.log(data);
    // });
    socketFactory().on('eeg', function(data) {
      // console.log(data);
      $scope.eegBlink = (data) ? (data.blinkStrength) : '';
      $scope.eegAttention = (data) ? (data.eSense.attention) : '';
      $scope.eegMeditation = (data) ? (data.eSense.meditation) : '';
      $scope.eegDelta = (data) ? (data.eegPower.delta) : '';
      $scope.eegTheta = (data) ? (data.eegPower.theta) : '';
      $scope.eegLowAlpha = (data) ? (data.eegPower.lowAlpha) : '';
      $scope.eegHighAlpha = (data) ? (data.eegPower.highAlpha) : '';
      $scope.eegLowBeta = (data) ? (data.eegPower.lowBeta) : '';
      $scope.eegHighBeta = (data) ? (data.eegPower.highBeta) : '';
      $scope.eegLowGamma = (data) ? (data.eegPower.lowGamma) : '';
      $scope.eegHighGamma = (data) ? (data.eegPower.highGamma) : '';
      $scope.eegSignal = (100 - (data.poorSignalLevel) / 2);
    });
  }
]);
(function ($) {
  'use strict';

  var ACOS = function () { };

  // initialize sail client
  const sailClient = new StatefulSailAppClient();
  ACOS.sendEvent = function (event, payload, cb) {
    sailClient.logEvent({ event, payload }, (resp) => cb?.(resp));
  };

  // make the namespace globally available
  window.ACOS = ACOS;
}(jQuery));

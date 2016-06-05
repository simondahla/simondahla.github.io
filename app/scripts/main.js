/* global log */
log('*The Doors of Durin, Lord of Moria.*');
log('_Speak, friend, and enter._');
log('*I, Narvi, made them. Celebrimbor of Hollin drew these signs.*');

var msg = '[c="color:green; font-weight: bold;"]Just kiddin\', give me a call![c]';

var mellon = function() {
  'use strict';
};

mellon.toString = function() {
  'use strict';
  log(msg);
  return ' ';
};

var Mellon = function() {
  'use strict';
};

Mellon.toString = function (){
  'use strict';
  log(msg);
  return ' ';
};

(function () {
  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: 'images/night.mp4',
        type: 'video/mp4'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
}());

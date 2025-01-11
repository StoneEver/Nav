(function() {
   'use strict';
   if (!Lampa.Platform.screen("mobile")) {

       function log(lgs) {
           console.log.apply(console.log, ['lmpPlugs', '[TvColorKeys]: ' + lgs])
       }

       log('TVkeys keys loaded');

       // Коды для цифр от 1 до 9
       var clCodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
       var sections = ['home', 'history', 'search', 'section1', 'section2', 'section3', 'section4', 'section5', 'section6'];

       var currentSection = '';

       function plugTVkeys(e) {
           if (e.type == 'start') {
               log('TVkeys listener started');
               document.addEventListener("keyup", listenTVkeys);
           }
       }

       function listenTVkeys(e) {
           var opt;
           if (clCodes.indexOf(e.key) > -1) {
               opt = clCodes.indexOf(e.key)
           } else {
               return;
           }

           // Определяем, на какую секцию переключиться в зависимости от нажатой клавиши
           var section = sections[opt];
           if (section) {
               switchSection(section);
           }
       }

       function switchSection(section) {
           if (currentSection !== section) {
               log('Switching to ' + section);
               currentSection = section;

               // Здесь можно добавить логику перехода, например, используя Lampa.Activity или другие методы.
               switch (section) {
                   case 'home':
                       Lampa.Activity.push({component: 'main'});
                       break;
                   case 'history':
                       Lampa.Activity.push({component: 'history'});
                       break;
                   case 'search':
                       Lampa.Activity.push({component: 'search'});
                       break;
                   // Дополнительные разделы можно добавить по аналогии
                   case 'section1':
                       log('Navigating to Section 1');
                       break;
                   case 'section2':
                       log('Navigating to Section 2');
                       break;
                   case 'section3':
                       log('Navigating to Section 3');
                       break;
                   case 'section4':
                       log('Navigating to Section 4');
                       break;
                   case 'section5':
                       log('Navigating to Section 5');
                       break;
                   case 'section6':
                       log('Navigating to Section 6');
                       break;
                   default:
                       log('Unknown section');
                       break;
               }
           }
       }

       Lampa.Listener.follow('activity', plugTVkeys);
       log('Listener started')
   }
})();

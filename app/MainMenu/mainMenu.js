'use strict';

angular
    .module('myApp')
    .component('mainMenu', {
        templateUrl: 'MainMenu/mainMenu.html',
        controller: function() {

            let mainMenu = this;

            mainMenu.active = 'list';

            mainMenu.changeActive = (active) => {
                mainMenu.active = active;
            };
        }
    });
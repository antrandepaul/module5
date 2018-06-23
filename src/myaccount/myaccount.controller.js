(function() {
    'use strict';

    angular.module('myaccount')
    .controller('MyAccountController', MyAccountController);
    
    MyAccountController.$inject = ['MyAccountService'];
    function MyAccountController(MyAccountService) {
        var $ctrl = this;
       
        $ctrl.user = MyAccountService.getUser();

        $ctrl.signup = function(person) {
            MyAccountService.signup(person);

        };

        $ctrl.$onInit = function() {
            //console.log("MyAccountService.isSignedUp()", MyAccountService.isSignedUp());
        };

        $ctrl.isSignedUp = function() {
            return MyAccountService.isSignedUp();
        }

        $ctrl.isChanged = function() {
            return MyAccountService.isChanged();
        }
    }

})();
(function(){
    "use strict";

    angular.module('myaccount')
    .service('MyAccountService', MyAccountService);
    MyAccountService.$inject = ['MenuService'];
    function MyAccountService(MenuService) {
        var service = this;
        var user = {};
        var isSignedUp = false;

        console.log("MyAcccountService:" + service);
        service.signup = function(person){
            
            var promise = MenuService.getMenuItems(person.menu);
            promise.then(function (response) {
                console.log("response", response);
                if (response.menu_items.length < 1) {
                    isSignedUp = false;
                    return;
                }
                user = person;
                isSignedUp = true;
               
                console.log("user signed up", user);
                user.menuItems = response;
                isSignedUp = true;
            })
            .catch(function(error){
                console.log("error:", error);
                isSignedUp = false;
            });
            

            
        };

        service.getUser = function(){
            return user;
        };

        service.isSignedUp = function() {
            return isSignedUp;
        }

        
    };

})();
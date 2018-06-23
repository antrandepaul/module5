(function(){
    "use strict";

    angular.module('myaccount')
    .service('MyAccountService', MyAccountService);
    MyAccountService.$inject = ['MenuService'];
    function MyAccountService(MenuService) {
        var service = this;
        var user = {};
        var isSignedUp = false;
        var isChanged = false;
        //console.log("MyAcccountService:" + service);
        service.signup = function(person){
            
            var promise = MenuService.getMenuItems(person.menu);
            promise.then(function (response) {
                //console.log("response", response);
                if (response.menu_items.length < 1) {
                    isSignedUp = false;
                    return;
                }
                user = person;
               
                //console.log("user signed up", user);
                user.menuItems = response;
                isSignedUp = true;
                

            })
            .catch(function(error){
                isSignedUp = false;
                
            })
            .finally(function(){
              isChanged = !isChanged;  
            });
            

            
        };

        service.getUser = function(){
            return user;
        };

        service.isSignedUp = function() {
            return isSignedUp;
        }

        service.isChanged = function() {
            return isChanged;
        }
        

        
    };

})();
(function() {
    "use strict";

    angular.module('myaccount')
    .controller()
    .directive('signUp', SignUpDirective);
    function SignUpDirective()
    {
        var ddo = {
            templateUrl: 'src/myaccount/signup.template.html',
            scope: {
                user: "<"
            },
            controller: 'MyAccountController',
            controllerAs: 'ctrl',
            bindToController: true,
            link: SignUpFormLink
        }   
        return ddo;        
    }

    function SignUpFormLink(scope, element, attrs, controller) {
        console.log("Link scope is: ", scope);
        console.log("Controller instance is: ", controller);
        console.log("Element is: ", element);

        scope.$watch('ctrl.isSignedUp()', function(newValue, oldValue){
            console.log("Old value: ", oldValue);
            console.log("New value: ", newValue);
           
            if(newValue === true)
                displayConfirmMessage();
            else if (scope.ctrl.user){
                console.log("user:", scope.ctrl.user);
                displayErrorMessage();
            }
          
        });

        function displayConfirmMessage() {
            element.find("div.error").slideUp(900);
            element.find("div.confirm").slideDown(900);
        }

        function displayErrorMessage() {
            element.find("div.confirm").slideUp(900);
            element.find("div.error").slideDown(900);

        }
    }
})();
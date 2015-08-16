angular.module('phwork')
.controller('MainCtrl', ['$rootScope', '$auth', 'toastr', function ($rootScope, $auth, toastr){

    Main = this;
    Main.logout = function () {
        console.log('gino');
        $auth.logout().then(function() {

            // Remove the authenticated user from local storage
            localStorage.removeItem('user');

            // Flip authenticated to false so that we no longer
            // show UI elements dependant on the user being logged in
            $rootScope.authenticated = false;

            // Remove the current user info from rootscope
            $rootScope.currentUser = null;
        
            toastr.success('Thank you for using PHWorks.', 'Successfully Logged Out!');
        });
    }
    
}])
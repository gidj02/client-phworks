angular.module('phwork')

.controller('UserCtrl', ['$http', '$rootScope', '$auth', '$state', 'toastr', function ($http, $rootScope, $auth, $state, toastr) {

    User = this;

    User.credentials = {
        username : '',
        password : ''
    };

}]);
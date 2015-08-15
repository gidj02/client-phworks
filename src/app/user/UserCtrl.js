angular.module('phwork')

.controller('UserCtrl', ['$http', '$rootScope', '$auth', '$state', 'toastr', function ($http, $rootScope, $auth, $state, toastr) {

    User = this;

    User.credentials = {
        username : '',
        password : ''
    };

    User.employees = [];

    User.init = function () {
        User.getEmployees();
    }

    User.getEmployees = function () {
        $http.get('http://localhost:8000/api/user/employee')
        .success(function (data){
            User.employees = data;
            console.log(User.employees);
        })
    }

    User.login = function (event) {
        event.preventDefault();
        // Use Satellizer's $auth service to login

        $auth.login(User.credentials)
        .then( function() {

                // Return an $http request for the now authenticated
                // user so that we can flatten the promise chain
                return $http.get('http://localhost:8000/api/authenticate/user');

            // Handle errors
            }, function(error) {
                User.loginError = true;
                User.loginErrorText = error.data.error;

                toastr.error('Incorrect Username or Password', 'Userentication Failed');

            // Because we returned the $http.get request in the $auth.login
            // promise, we can chain the next promise to the end here
            })
        .then( function (response) {

                if( ! angular.isUndefined(response) ) {
                    // Stringify the returned data to prepare it
                    // to go into local storage
                    var user = JSON.stringify(response.data.user);

                    // Set the stringified user data into local storage
                    localStorage.setItem('user', user);

                    // The user's authenticated state gets flipped to
                    // true so we can now show parts of the UI that rely
                    // on the user being logged in
                    $rootScope.authenticated = true;

                    // Putting the user's data on $rootScope allows
                    // us to access it anywhere across the app
                    $rootScope.currentUser = response.data.user;

                    toastr.success('User ' + $rootScope.currentUser.name, 'Welcome to PHWorks!');

                    // Everything worked out so we can now redirect to
                    // the users state to view the data
                    $state.go('user.dashboard');
                }
            })
    }

    User.init();

}]);

function config($httpProvider, $stateProvider, $urlRouterProvider, $provide, $ocLazyLoadProvider, $authProvider, IdleProvider, KeepaliveProvider, toastrConfig) {
    
    // Satellizer configuration that specifies which API
    // route the JWT should be retrieved from
   $authProvider.loginUrl = 'http://localhost:8000/api/authenticate';


    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get("$state");
        $state.go("login");
    });


    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/user/user_login.html",
            controller: "UserCtrl as User"
        })

        .state('user', {
            abstract: true,
            url: "/user",
            templateUrl: "assets/views/content.html",
        })
        
        .state('user.dashboard', {
            url: "/dashboard",
            templateUrl: "app/user/user_dashboard.html",
            controller: "UserCtrl as User"
        })

        .state('user.employee', {
            url: "/employee",
            templateUrl: "app/user/employee_list.html",
            controller: "UserCtrl as User"
        })

        .state('service', {
            abstract: true,
            url: "/service",
            templateUrl: "assets/views/content.html",
        })

        .state('service.form', {
            url: "/form",
            templateUrl: "app/service/service_form.html",
            controller: "ServiceCtrl as Service"
        })

        .state('service.match', {
            url: "/match",
            templateUrl: "app/service/match_result.html",
            controller: "ServiceCtrl as Service"
        })
        
        /* =============================================
         * AngularJS - Toastr Configuratipon
         * https://github.com/Foxandxss/angular-toastr
         * ============================================= */

        angular.extend(toastrConfig, {
            allowHtml: false,
            autoDismiss: false,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            containerId: 'toast-container',
            extendedTimeOut: 1000,
            maxOpened: 0,    
            messageClass: 'toast-message',
            newestOnTop: true,
            onHidden: null,
            onShown: null,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            progressBar: true,
            tapToDismiss: true,
            target: 'body',
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 10000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
      
}
angular
    .module('phwork')
    .config(config)
    .run(function($rootScope, $state, toastr) {

            // $stateChangeStart is fired whenever the state changes. We can use some parameters
            // such as toState to hook into details about the state as it is changing
            $rootScope.$on('$stateChangeStart', function(event, toState) {

                // Grab the user from local storage and parse it to an object
                var user = JSON.parse(localStorage.getItem('user'));            

                if(user) {


                    // The user's authenticated state gets flipped to
                    // true so we can now show parts of the UI that rely
                    // on the user being logged in
                    $rootScope.authenticated = true;

                    // Putting the user's data on $rootScope allows
                    // us to access it anywhere across the app. Here
                    // we are grabbing what is in local storage
                    $rootScope.currentUser = user;

                    // If the user is logged in and we hit the auth route we don't need
                    // to stay there and can send the user to the main state
                    if(toState.name === "login") {

                        toastr.warning('You\'re currently Logged In.', 'PHWorks, Continuing to serve you!');
                        // Preventing the default behavior allows us to use $state.go
                        // to change states
                        event.preventDefault();

                        // go to the "main" state which in our case is users
                        $state.go('user.dashboard');
                    }       
                }

            });
        });
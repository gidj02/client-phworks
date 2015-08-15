
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
            controller: "UserCtrl as User",
        })

        .state('user', {
            abstract: true,
            url: "/user",
            templateUrl: "assets/views/content.html",
            // data : {
            //     requireLogin : true
            // }
        })
        .state('user.dashboard', {
            url: "/home",
            templateUrl: "app/user/user_dashboard.html",
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
    .config(config);
   
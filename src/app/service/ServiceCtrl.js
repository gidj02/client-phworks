angular.module('phwork')

.controller('ServiceCtrl', ['$http', '$rootScope', '$state', 'toastr', function ($http, $rootScope, $state, toastr) {

    Service = this;

    Service.fields = [];
    Service.selectedField = "";

    Service.init = function () {
        Service.getFields();
    }

    Service.getFields = function () {
        $http.get('http://localhost:8000/api/field')
        .success( function (data){
            Service.fields = data;
        });
    } 

    Service.init();
}]);
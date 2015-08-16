angular.module('phwork')

.controller('ServiceCtrl', ['$http', '$rootScope', '$state', 'toastr', function ($http, $rootScope, $state, toastr) {

    Service = this;

    Service.fields = [];
    Service.data = {
        selectedField : "",
        description : ""
    }

    Service.init = function () {
        Service.getFields();
    }

    Service.getFields = function () {
        $http.get('http://localhost:8000/api/field')
        .success( function (data){
            Service.fields = data;
        });
    } 

    Service.submit = function (event) {
        event.preventDefault();
        $http.post('http://localhost:8000/api/service',{
            client_id : $rootScope.currentUser.user_id,
            field_id : Service.data.selectedField.field_id,
            description :Service.data.description            
        })
        .success( function (data) {
            
        });
    }

    Service.init();
}]);
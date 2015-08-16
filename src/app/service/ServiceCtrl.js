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
        console.log(Service.data.selectedField.field_id);
        $http.post('http://localhost:8000/api/request',{
            client_id : $rootScope.currentUser.user_id,
            field : Service.data.selectedField.field_id,
            description :Service.data.description            
        })
        .success(function(data, status, headers, config) {
            console.log(data);
            $state.go('service.match');
            toastr.success('They are the workers suited for your problem!.', 'Matching with PHWorkers!');
        });
    }

    Service.init();
}]);
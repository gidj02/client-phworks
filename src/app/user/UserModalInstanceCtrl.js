/* =============================================
 * Modal Instance Controller
 * ============================================= */
angular.module('phwork')

.controller('UserModalInstanceCtrl', function ($modalInstance, $http) {
    
    ModalInstance = this;
    ModalInstance.data = {
        name : '',
        message : '',
    };

    ModalInstance.ok = function () {
        event.preventDefault();
        $modalInstance.close(ModalInstance.data);
    };

    ModalInstance.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
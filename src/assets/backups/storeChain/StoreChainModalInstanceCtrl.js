/* =============================================
 * Modal Instance Controller
 * ============================================= */
angular.module('vinteo')

.controller('StoreChainModalInstanceCtrl', function ($modalInstance, $http, storeChain) {
	
	ModalInstance = this;
	ModalInstance.storeChain = '';

	ModalInstance.storeChain = storeChain;
	
	ModalInstance.ok = function () {
		$modalInstance.close(ModalInstance.storeChain);
	};

	ModalInstance.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
angular.module('vinteo')

.controller('StoreChainCtrl', ['$http', 'toastr', '$modal', function ($http, toastr, $modal) {
	StoreChain = this;

	StoreChain.storeChainLists = [];
	StoreChain.store = '';

	StoreChain.init = function () {
		StoreChain.getStoreChainChainRecords();
    
    	toastr.success('Retail Analytics for Decision Makers.', 'Welcome to Vinteo Inc!');
	}	

	StoreChain.getStoreChainChainRecords = function () {
		$http.get('http://api.vinteoinc.com/api/store_chain').success(function(data, status, headers, config) {
			StoreChain.storeChainLists = data;
		});
	}

	StoreChain.addStoreChain = function () {
		$http.post('http://api.vinteoinc.com/api/store_chain', {
			store_chain_name: StoreChain.storeChain.store_chain_name,
		}).success(function(data, status, headers, config) {
			StoreChain.storeChainLists.push(data);
			StoreChain.storeChain = '';
			toastr.success('Record Successfully Added..', 'Store Chain Created!');
		});
	}

	StoreChain.openDeleteModal = function (index) {
		var storeChain = StoreChain.storeChainLists[index];

		var modalInstance = $modal.open({
            templateUrl: 'app/storeChain/delete_store_chain_modal.php',
            controller: "StoreChainModalInstanceCtrl as ModalInstance",
            windowClass: "animated flipInY",
            size: 'sm',
            resolve: {
				storeChain: function () {
					return storeChain;
				}
			}
        });

        modalInstance.result.then(function () {
			StoreChain.deleteStoreChain(index);
		});
	}

	StoreChain.openUpdateModal = function (storeChain) {
		var modalInstance = $modal.open({
            templateUrl: 'app/storeChain/update_store_chain_modal.php',
            controller: "StoreChainModalInstanceCtrl as ModalInstance",
            windowClass: "animated flipInY",
            resolve: {
				storeChain: function () {
					return storeChain;
				}
			}
        });

        modalInstance.result.then(function (result) {
			StoreChain.updateStoreChain(result, storeChain);
		});
	}

	StoreChain.updateStoreChain = function (result, storeChain) {
		$http.put('http://api.vinteoinc.com/api/store_chain/' + storeChain.store_chain_id, {
			store_chain_name: result.store_chain_name,
		}).success(function(data, status, headers, config) {
			toastr.success('Record Successfully Updated..', 'Store Chain Updated!');
			StoreChain.getStoreChainRecords();
		});;
	}

	StoreChain.deleteStoreChain = function (index) {
		var selectedStoreChain = StoreChain.storeChainLists[index]

		$http.delete('http://api.vinteoinc.com/api/store_chain/' + selectedStoreChain.store_chain_id).success(function(response){
	        StoreChain.storeChainLists.splice(index, 1);
	        toastr.success('Record Successfully Deleted..', 'Store Chain Deleted!');
    	});
	}

	StoreChain.init();
}])

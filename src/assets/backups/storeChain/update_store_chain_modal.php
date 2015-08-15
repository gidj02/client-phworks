<div class="inmodal">
    <div class="modal-header">
        <h4 class="modal-title">Update Store</h4>
        <center><small class="font-bold">Please provide new information for the selected store.</small></center>
    </div>
    <div class="modal-body">
        <center>
            <div class="panel-body">
                <fieldset class="form-horizontal">
                <div class="form-group"><label class="col-sm-2 control-label">Store Chain Name:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" ng-model="ModalInstance.storeChain.store_chain_name" placeholder="Store Chain Name">
                    </div>
                </div>
                </fieldset>
            </div>
        </center>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-white" ng-click="ModalInstance.cancel()">Close</button>
        <button type="button" class="btn btn-primary" ng-click="ModalInstance.ok()">Update</button>
    </div>
</div>



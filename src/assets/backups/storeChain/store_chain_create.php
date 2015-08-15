<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-10">
        <h2>Product edit</h2>
        <ol class="breadcrumb">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a>E-commerce</a>
            </li>
            <li class="active">
                <strong>Product edit</strong>
            </li>
        </ol>
    </div>
</div>
<div class="wrapper wrapper-content animated fadeInRight ecommerce">

    <div class="row">
        <div class="col-lg-12">

            <div class="tabs-container">

                <tabset>
                    <tab>
                        <tab-heading>
                            Store Chain Information
                        </tab-heading>
                        <div class="panel-body">
                            <fieldset class="form-horizontal">
                                <div class="form-group"><label class="col-sm-2 control-label">Store Chain Name:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" ng-model="StoreChain.storeChain.store_chain_name" placeholder="Store Chain Name">
                                    </div>
                                </div>
                                <div class="btn-group pull-right">
                                    <button class="btn btn-white" type="button">Clear</button>
                                    <button class="btn btn-primary" type="button" ng-click="StoreChain.addStoreChain()">Submit</button>
                                </div>
                            </fieldset>
                        </div>
                    </tab>
                    
                </tabset>

            </div>


        </div>
    </div>

</div>
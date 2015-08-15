<div class="row wrapper border-bottom white-bg page-heading">
    <div class="col-lg-10">
        <h2>E-commerce product list</h2>
        <ol class="breadcrumb">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a>E-commerce</a>
            </li>
            <li class="active">
                <strong>Product list</strong>
            </li>
        </ol>
    </div>
    <div class="col-lg-2">

    </div>
</div>
<div class="wrapper wrapper-content animated fadeInRight ecommerce">


    <div class="ibox-content m-b-sm border-bottom">
        <div class="row">
            <div class="col-sm-4">
                <div class="form-group">
                    <label class="control-label" for="product_name">Store Chain Id</label>
                    <input type="text" ng-model="chainid" value="" placeholder="Store ChainId" class="form-control">
                </div>
            </div>
            <div class="col-sm-2">
                <div class="form-group">
                    <label class="control-label" for="price">Store Chain Name</label>
                    <input type="text" ng-model="nameid" value="" placeholder="Store Chain Name" class="form-control">
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="ibox">
                <div class="ibox-content">

                    <table class="footable table table-stripped toggle-arrow-tiny" data-page-size="15">
                        <thead>
                            <tr>

                                <th data-toggle="true">Store Chain ID</th>
                                <th>Store Chain Name</th>
                                <th class="text-right" data-sort-ignore="true">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="list in StoreChain.storeChainLists 
                                    | filter: chainid
                                    | filter: nameid
                                    | filter: name
                                     ">
                                <td>
                                    {{ list.store_chain_id }}
                                </td>
                                <td>
                                    {{ list.store_chain_name }}
                                </td>
                                </td>
                                <td class="text-right">
                                    <div class="btn-group">
                                        <button class="btn-primary btn btn-xs" ng-click="StoreChain.openUpdateModal(list)">Edit</button>
                                        <button class="btn-white btn btn-xs" ng-click="StoreChain.openDeleteModal($index)">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="6">
                                    <ul class="pagination pull-right"></ul>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        </div>
    </div>


</div>
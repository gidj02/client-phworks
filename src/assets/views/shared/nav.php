<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul side-navigation class="nav metismenu" id="side-menu">
            <li class="nav-header">

                <div class="dropdown profile-element" dropdown>
                    <a ui-sref="login"><img alt="image" class="img-circle" src="assets/img/vinteoinc-logo.png" style="width: 48px; height: 48px;"/></a>
                    <a class="dropdown-toggle" dropdown-toggle href>
                            <span class="clear">
                                <span class="block m-t-xs">
                                    <strong class="font-bold">Vinteo Inc.</strong>
                             </span>
                                <span class="text-muted text-xs block">Retail Analytics <b class="caret"></b></span>
                            </span>
                    </a>
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a ui-sref="profile">Profile</a></li>
                        <li><a ui-sref="contacts">Contacts</a></li>
                        <li><a ui-sref="inbox">Mailbox</a></li>
                        <li class="divider"></li>
                        <li><a href="../login.html">Logout</a></li>
                    </ul>
                </div>
                <div class="logo-element">
                    VI+
                </div>
            </li>
            <li ng-class="{active: $state.includes('store')}">
                <a href="#"><i class="fa fa-shopping-cart"></i> <span class="nav-label">{{ 'STORE MANAGEMENT' | translate }}</span> <span class="fa arrow"></span></a>
                <ul class="nav nav-second-level" ng-class="{in: $state.includes('store')}">
                    <li ui-sref-active="active"><a ui-sref="store.list">{{ 'LIST' | translate }}</a></li>
                    <li ui-sref-active="active"><a ui-sref="store.create">{{ 'CREATE' | translate }}</a></li>
                </ul>
            </li>
            <li ng-class="{active: $state.includes('device')}">
                <a href="#"><i class="fa fa-mobile fa-lg"></i> <span class="nav-label">{{ 'DEVICE MANAGEMENT' | translate }}</span> <span class="fa arrow"></span></a>
                <ul class="nav nav-second-level" ng-class="{in: $state.includes('device')}">
                    <li ui-sref-active="active"><a ui-sref="device.list">{{ 'LIST' | translate }}</a></li>
                    <li ui-sref-active="active"><a ui-sref="device.create">{{ 'CREATE' | translate }}</a></li>
                </ul>
            </li>
        </ul>

    </div>
</nav>
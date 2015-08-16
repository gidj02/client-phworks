var myApp = angular.module('phwork');

myApp.filter('fromNow',function(){
    return function(date){
        return moment(date, "'YYYY-MM-DD h:mm:ss a'").fromNow();
    }
});
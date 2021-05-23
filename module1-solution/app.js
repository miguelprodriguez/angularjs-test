(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope, $filter) {
        $scope.placeholder = "List comma separated dishes you usually have for lunch";
        $scope.list = "";
        $scope.result = "";

        $scope.splitString = () => {
            let tasks = $scope.list.split(",")
            if(tasks == "") {
                $scope.result = "Please enter data first!"
            } else if (tasks.length > 0 && tasks.length < 4) {
                $scope.result = "Enjoy!"
            } else {
                $scope.result = "Too much!"
            }
            $scope.list = ""
        }

        $scope.resultStyle = () => {
            let res = $scope.result 
            console.log(res == "Enjoy!")
            if(res == "Enjoy!") {
                return "textGreen"
            } else if(res == "Too much!") {
                return "textRed"
            } else {
                return
            }
        }
    }
    
    })();
    
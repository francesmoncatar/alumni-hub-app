var app = angular.module('studentApp', []);

app.controller('StudentCtrl', function($scope) {
    $scope.user = "Ruvic Santos";
    
    $scope.myRequests = [
        { title: 'Transcript of Records', ref: 'REF-2026-001', status: 'Pending', statusClass: 'pending', subDate: 'Feb 15, 2026' },
        { title: 'Good Moral', ref: 'REF-2026-001', status: 'Approved', statusClass: 'approved', subDate: 'Feb 15, 2026' },
        { title: 'Diploma Copy', ref: 'REF-2026-002', status: 'Ready for Pickup', statusClass: 'ready', subDate: 'Feb 10, 2026' }
    ];
});
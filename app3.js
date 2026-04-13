var app = angular.module('staffApp', []);

app.controller('StaffCtrl', function($scope) {
    $scope.activeFilter = 'All';
    $scope.statusFilter = {};

    $scope.setFilter = function(status) {
        $scope.activeFilter = status;
        $scope.statusFilter = (status === 'All') ? {} : { status: status };
    };

    $scope.requests = [
        { documentName: 'Transcript of Records', ref: 'REF-2026-001', studentName: 'John Doe', date: 'Mar 5, 2026', time: '10:00 AM', status: 'Approved', statusClass: 'approved' },
        { documentName: 'Diploma Copy', ref: 'REF-2026-002', studentName: 'John Doe', date: 'Feb 28, 2026', time: '2:00 PM', status: 'Ready for Pickup', statusClass: 'ready' },
        { documentName: 'Transaction of Records', ref: 'REF-2026-003', studentName: 'Ruvic Santos', date: 'Feb 27, 2026', time: '9:00 AM', status: 'Pending', statusClass: 'pending' }
    ];
});
// Initialize the module 'profileApp' which matches ng-app in index1.html
var app = angular.module('profileApp', []);

// Set up the ProfileController which matches ng-controller in index1.html
app.controller('ProfileController', function($scope) {
    
    // We define a 'profile' object containing the data from the screenshot.
    // AngularJS uses these properties to automatically replace the placeholders in the HTML.
    $scope.profile = {
        fullName: 'Ruvic Santos',
        role: 'Alumni',
        email: 'rvsantos@gmail.com',
        studentId: '2022-012345',
        accountType: 'Alumni Account'
    };

    // Placeholder function for navigation or actions
    $scope.goBack = function() {
        // Log to console for testing
        console.log("Back arrow clicked");
        // In a real app, you would add logic here to navigate to previous screen
    };

    $scope.logout = function() {
        console.log("Logout initiated for user: " + $scope.profile.fullName);
        // Add logout redirect logic here
    };
});
appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '',
            template: '<ui-view/>',
            abstract: true
        });
    console.log("end");
    $urlRouterProvider.otherwise('');
}
export default appConfig;
taskConfig.$inject = ['$stateProvider'];

function taskConfig($stateProvider) {
    $stateProvider
        .state('home.tasks', {
            url: '/',
            views: {
                'tasks@': {
                    template: require('./tasks.tmpl.html'),
                    controller: 'TasksController as vm',
                }
            }
        })
        .state('home.tasks.add', {
            url: 'task/add',
            views: {
                'handleTask@': {
                    template: require('./operations/addTask.tmpl.html'),
                    controller: 'TasksController as vm',
                }
            }
        })
        .state('home.tasks.edit', {
            url: 'task/edit',
            views: {
                'handleTask@': {
                    template: require('./operations/editTask.tmpl.html'),
                    // controller:'TasksController as vm',
                    controller: 'EditController as vm'
                }
            }
        })
}

export default taskConfig;

console.log("task config");
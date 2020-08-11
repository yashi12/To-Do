import _ from 'underscore';

tasksService.$inject = ['$http', '$q', '$localStorage'];

function tasksService($http, $q, $localStorage) {

    const tasksService = this;
    let tasksList;

    tasksService.getTasks = getTasks;

    async function getTasks() {
        if ($localStorage.tasks) {
            tasksList = $localStorage.tasks;
        } else {
            await import('../../data/tasks.json')
                .then(({default: tasks}) => {
                    console.log("tasks");
                    tasksList = tasks;
                })
            return tasksList;
        }
    }
}

export default tasksService;
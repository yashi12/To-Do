import _ from 'underscore';

tasksService.$inject = ['$http', '$q', '$localStorage'];

function tasksService($http, $q, $localStorage) {

    const tasksService = this;
    let tasksList;

    tasksService.getTasks = getTasks;
    tasksService.addTask = addTask;
    tasksService.deleteTask = deleteTask;

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

    function addTask(task) {
        if(!tasksList){
            getTasks();
        }
        let max = _.max(tasksList,function (currTask) {
            return currTask.id;
        })
        task.id = max.id + 1;
        tasksList.push(task);
        console.log(tasksList);
    }

    function deleteTask(task) {
        if(!tasksList){
            getTasks();
        }
        let index = _.findIndex(tasksList, function (currTask) {
            return currTask.id == task.id;
        });
        tasksList.splice(index,1);
    }
}

export default tasksService;
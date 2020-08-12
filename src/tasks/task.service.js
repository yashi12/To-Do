import _ from 'underscore';

tasksService.$inject = [ '$localStorage'];

function tasksService( $localStorage) {

    const tasksService = this;
    let tasksList;

    tasksService.getTasks = getTasks;
    tasksService.addTask = addTask;
    tasksService.deleteTask = deleteTask;
    tasksService.setNewTask = setNewTask;
    tasksService.editTask = editTask;
    tasksService.toggleState = toggleState;

    async function getTasks() {
        if ($localStorage.tasks) {
            tasksList = $localStorage.tasks;
        } else {
            await import('../../data/tasks.json')
                .then(({default: tasks}) => {
                    console.log("tasks", tasks);
                    tasksList = tasks;
                    console.log(tasksList);
                })
            return tasksList;
        }
    }

    function addTask(task) {
        if (!tasksList) {
            getTasks();
        }
        let max = _.max(tasksList, function (currTask) {
            return currTask.id;
        })
        task.id = max.id + 1;
        tasksList.push(task);
        console.log(tasksList);
    }

    function deleteTask(task) {
        if (!tasksList) {
            getTasks();
        }
        let index = _.findIndex(tasksList, function (currTask) {
            return currTask.id == task.id;
        });
        tasksList.splice(index, 1);
    }

    function setNewTask(task) {
        tasksService.newSetTask = task;
    }

    function editTask(task) {
        if (!tasksList) {
            getTasks();
        }
        let index = _.findIndex(tasksList, function (currTask) {
            return currTask.id == task.id;
        });
        tasksList[index] = task;
    }

    function toggleState(task) {
        task.completed = !task.completed;
    }
}

export default tasksService;
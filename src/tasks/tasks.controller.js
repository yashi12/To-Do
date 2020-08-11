import tasksService from './task.service.js';

TasksController.$inject = ['$stateParams', '$localStorage', 'tasksService'];

function TasksController($stateParams, $localStorage, tasksService) {
    let vm = this;
    vm.addTaskName = "";
    vm.addDueDate = "";

    vm.addTaskToList = addTaskToList;
    vm.deleteTask = tasksService.deleteTask;

    activate();

    function activate() {
        if ($localStorage.tasks) {
            vm.taskList = $localStorage.tasks;
            $localStorage.tasks = vm.taskList;
            console.log("local", $localStorage.tasks);
            // alert("2 Time Call");
        } else {
            console.log("task service", tasksService.getTasks());
            return tasksService.getTasks()
                .then(function (tasks) {
                    vm.taskList = tasks;
                    $localStorage.tasks = vm.taskList;
                    // alert("1");
                }).catch(function (reason) {
                    alert(reason);
                    console.log(reason);
                });
        }
    }

    function addTaskToList() {
        console.log("create");
        tasksService.newTask = {
            completed: false,
            taskName:vm.addTaskName,
            date: new Date(),
            dueDate:vm.addTaskName,
            category: ""
        };
        tasksService.addTask(tasksService.newTask);
    }

}

export default TasksController;

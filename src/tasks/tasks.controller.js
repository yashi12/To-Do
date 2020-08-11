import tasksService from './task.service.js';

TasksController.$inject = ['$stateParams', '$localStorage', 'tasksService'];

function TasksController($stateParams, $localStorage, tasksService) {
    let vm = this;

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
}

export default TasksController;

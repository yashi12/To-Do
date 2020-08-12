import tasksService from './task.service.js';
import _ from 'underscore';
import 'moment';

TasksController.$inject = ['$stateParams',  'tasksService','$localStorage'];

function TasksController($stateParams, tasksService,$localStorage) {
    let vm = this;

    vm.addTaskName = "";
    vm.addDueDate = "";
    vm.addTaskToList = addTaskToList;
    vm.deleteTask = tasksService.deleteTask;
    vm.openEditTask = openEditTask;
    vm.toggleState = toggleState;
    vm.getClass = getClass;
    vm.clearCompleted =clearCompleted;
    vm.sortDatewise = sortDatewise;

    activate();

    function activate() {
        if ($localStorage.tasks) {
            vm.taskList = $localStorage.tasks;
            $localStorage.tasks = vm.taskList;
            console.log("local", $localStorage.tasks);
            alert("2 Time Call");
        } else {
            console.log("task service", tasksService.getTasks());
            return tasksService.getTasks()
                .then(function (tasks) {
                    vm.taskList = tasks;
                    console.log(vm.taskList);
                    $localStorage.tasks = vm.taskList;
                    alert("1");
                }).catch(function (reason) {
                    alert(reason);
                    console.log(reason);
                });
        }
    }

    function addTaskToList() {
        console.log("taskList",vm.taskList);
        console.log("create");
        tasksService.newTask = {
            completed: false,
            taskName: vm.addTaskName,
            date: new Date(),
            dueDate: vm.addDueDate,
            category: 0
        };
        tasksService.addTask(tasksService.newTask);
    }

    function openEditTask(task) {
        tasksService.setNewTask(task);
        // vm.data = task;
    }

    function toggleState(task) {
        tasksService.toggleState(task);
    }

    function clearCompleted() {
        console.log("clr");
        vm.taskList = _.filter(vm.taskList, function(task){
            return !task.completed;
            // if (task.completed) {
            //     vm.deleteTask(task);
            // }
        });
        // for (let task in vm.taskList) {
        //     console.log("*", task);
        //     if (vm.taskList[task].completed) {
        //         vm.deleteTask(vm.taskList[task]);
        //     }
        // }
    };

    function sortDatewise() {
        console.log("clr sort");
        vm.taskList = _.sortBy(vm.taskList, function(task){
            return [!task.dueDate,task.dueDate];
            // if (task.completed) {
            //     vm.deleteTask(task);
            // }
        });
        // for (let task in vm.taskList) {
        //     console.log("*", task);
        //     if (vm.taskList[task].completed) {
        //         vm.deleteTask(vm.taskList[task]);
        //     }
        // }
    };

    function getClass(category) {
        return {
            'badge-danger': category > 7,
            'badge-secondary': category > 4 && category < 8,
            'badge-warning':category <5
        }
    }
}

export default TasksController;

import tasksService from './task.service.js';
import _ from 'underscore';
import moment from 'moment';

TasksController.$inject = ['tasksService', '$localStorage'];

function TasksController(tasksService, $localStorage) {
    let vm = this;

    vm.addTaskName = "";
    vm.addDueDate = "";
    // vm.goToHome="home.tasks.add"
    vm.temperature = "";
    vm.dayType = "";
    var lat;
    var lon ;
    vm.addTaskToList = addTaskToList;
    vm.deleteTask = tasksService.deleteTask;
    vm.openEditTask = openEditTask;
    vm.toggleState = toggleState;
    vm.getClass = getClass;
    vm.clearCompleted = clearCompleted;
    vm.sortDatewise = sortDatewise;
    vm.getCompleted = getCompleted;
    vm.getWeather = getWeather;
    // vm.ifValid = ifValid;
    vm.resetForm = resetForm;
    vm.getToDoList = getToDoList;
    vm.checkOverdue = checkOverdue;
    let numSortDateWise = 0;
    let numClearCompleted = false;
    let numGetCompleted = false;
    


    activate();
    getLocation();
    
    function getLocation(){
        const sucessCall = (position)=>{
            console.log("position",position);
            lat =position.coords.latitude;
            lon =position.coords.longitude;
            console.log("lat+lon",lat,lon);
            getWeather();
        }
        const errorCall = (error)=>{
            console.log(error);
        }

    navigator.geolocation.getCurrentPosition(sucessCall,errorCall);
    
    }

    function activate() {

        if ($localStorage.tasks) {
            vm.taskList = $localStorage.tasks;
            $localStorage.tasks = vm.taskList;
            console.log("local", $localStorage.tasks);
            // alert("2 Time Call");
        }
        else {
            vm.taskList=[];
            $localStorage.tasks = vm.taskList;

            // console.log("task service", tasksService.getTasks());
            // return tasksService.getTasks()
            //     .then(function (tasks) {
            //         console.log("tasks",tasks);
            //         vm.taskList = tasks;
            //         console.log(vm.taskList);
            //         $localStorage.tasks = vm.taskList;
            //         // alert("1");
            //     }).catch(function (reason) {
            //         alert(reason);
            //         console.log(reason);
            //     });
        }
    }

    async function getWeather() {
        console.log("weather");
        let apiKey='6c593e7606df5c875f49e434e924aa32';
        
        // await fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6c593e7606df5c875f49e434e924aa32')
        console.log("lat+long",lat,lon);
        await fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=6c593e7606df5c875f49e434e924aa32')
            .then(function (response) {
                return response.json();
            }).then(function (result) {
                console.log("weathrr", result.main.temp, result.weather[0].description);
                vm.temperature = result.main.temp;
                vm.dayType = result.weather[0].description;
                console.log(vm.temperature, vm.dayType);
            }).catch(function (error) {
                console.log(error);
            });
    }

    function addTaskToList() {

        console.log("add before taskList", vm.taskList);
        console.log("create");
        tasksService.newTask = {
            completed: false,
            taskName: vm.addTaskName,
            date: new Date(),
            // dueDate: moment(new Date(vm.addDueDate)).format('YYYY-MM-DDTkk:mm'),
            dueDate: moment(vm.addDueDate).format('YYYY-MM-DDTkk:mm'),
            // dueDate: vm.addDueDate,
            category: 0
        };
        tasksService.addTask(tasksService.newTask);
        console.log("add after taskList",vm.taskList);
        console.log(tasksService.newTask.dueDate);
        console.log(typeof (tasksService.newTask.dueDate));
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
        if(numClearCompleted == false){
            vm.oriClearCompletedTaskList = vm.taskList;
            vm.taskList = _.filter(vm.taskList, function (task) {
                return !task.completed;
            });
            vm.classclearCompleted =true;
        }else{
            vm.taskList = vm.oriClearCompletedTaskList;
            vm.classclearCompleted =false;
        }
        numClearCompleted =!numClearCompleted;
        
    };

    function getCompleted() {
        if(numGetCompleted == false){

           vm.oriGetCompleted = vm.taskList;
            vm.taskList = _.filter(vm.taskList, function (task) {
                return task.completed;
            });
            vm.classGetCompleted = true;
        }else{
            vm.taskList = vm.oriGetCompleted;
            vm.classGetCompleted = false;
        }
        numGetCompleted = !numGetCompleted;
    };


    // function sortDatewise() {
    //     console.log("clr sort");
    //     vm.taskList = _.sortBy(vm.taskList, function (task) {
    //         return [!task.dueDate, task.dueDate, task.date];
    //     });
    // };
    function sortDatewise() {
        console.log("clr sort");
        if(numSortDateWise== 0 ){
            numSortDateWise ++;
            vm.oriSortTaskList = vm.taskList;

            vm.taskList = _.filter(vm.taskList, function (task) {
                let endTime= moment(task.dueDate);
                let now = moment();
                let difference = moment.duration(endTime.diff(now));
                if(difference >0){
                    return task;
                }
                vm.classSort =true;
            });
        }else{
            numSortDateWise --;
            vm.taskList = vm.oriSortTaskList;
            vm.classSort = false;
        }
    };

    function getClass(category) {
        return {
            'badge-danger': category > 7,
            'badge-secondary': category > 4 && category < 8,
            'badge-warning': category < 5
        }
    }

    function resetForm() {
        vm.addTaskName="";
        // vm.goToHome = "home.tasks";
        // console.log(vm.goToHome);
    }

    function getToDoList() {
        vm.taskList = $localStorage.tasks;
    }

    function checkOverdue(task) {
        let endTime= moment(task.dueDate);
        // console.log("endtime",endTime);
        let now = moment();
        let difference = moment.duration(endTime.diff(now));
        if(difference >0){
            return false;
        }
        else {
            return true;
        }
        console.log(vm.overdue);
        // return true;

    }
    // function ifValid() {
    //     console.log(vm.taskForm);
    //     let k = vm.taskForm.$valid ? 'home.tasks' :'-';
    //     console.log(k);
    //     return k;
    // }

    // function getClass(category) {
    //     return {
    //         'label-important': category > 7,
    //         'label-warning': category > 4 && category < 8
    //     }
    // }
}

export default TasksController;

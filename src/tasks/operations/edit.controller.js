import tasksService from '../task.service.js';
import 'moment';

EditController.$inject = ['$stateParams', 'tasksService'];

function EditController($stateParams, tasksService) {
    let vm = this;
    vm.data = tasksService.newSetTask.taskName;
    vm.dueDate = tasksService.newSetTask.dueDate;
    vm.category = tasksService.newSetTask.category;
    // vm.dueDate.format('yyyy-MM-ddThh:mm')
    vm.editTask = editTask;


    function editTask() {
        tasksService.newSetTask.date = new Date();
        tasksService.newSetTask.taskName = vm.data;
        tasksService.newSetTask.dueDate = new Date(vm.dueDate);
        tasksService.newSetTask.category = vm.category;
        // tasksService.newSetTask.dueDate = vm.dueDate;
        tasksService.editTask(tasksService.newSetTask);
    }

}

export default EditController;
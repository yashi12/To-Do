import tasksService from "./task.service.js";

taskFilter.$inject = ['tasksService'];

function taskFilter() {
    return orderBy(['!dueDate','dueDate'])
};

export default taskFilter;
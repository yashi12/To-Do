import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'ngstorage';

import taskConfig from './task.config.js';
import tasksService from "./task.service.js";
import TasksController from "./tasks.controller.js";
import EditController from "./operations/edit.controller.js";
// import taskFilter from "./task.filter.js";

const taskModule = angular
    .module('tasks', [uiRouter, 'ngStorage'])
    .config(taskConfig)
    .service('tasksService', tasksService)
    .controller('TasksController', TasksController)
    .controller('EditController', EditController);
// .filter('taskFilter',taskFilter);

export default taskModule;

console.log("task module");
import './frontend.packages.js';
import './mainPage.css';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import appConfig from './app.config.js';
import taskModule from "./tasks/task.module.js";
import AppController from './app.controller.js';

angular
    .module('app', [uiRouter, 'tasks'])
    .config(appConfig);
    // .controller('AppController', AppController);
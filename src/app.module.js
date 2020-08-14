import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import moment from 'moment';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import 'font-awesome/css/font-awesome.min.css';
// require('font-awesome/css/font-awesome.min.css');
// import '@fortawesome/fontawesome-free/css/all.css';
// @import '~@fortawesome/fontawesome-free/css/all.css';
require('@fortawesome/fontawesome-free/js/all.js');

// import './frontend.packages.js';
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
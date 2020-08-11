import './frontend.packages.js';

import angular from 'angular';
import appConfig from './app.config.js';

angular
    .module('app', [])
    .config(appConfig);
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsDetailsComponent from './postsDetails.component';

let postsDetailsModule = angular.module('postsDetails', [
  uiRouter
])

.component('postsDetails', postsDetailsComponent)

.name;

export default postsDetailsModule;

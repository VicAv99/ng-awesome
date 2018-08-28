import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsListComponent from './postsList.component';

let postsListModule = angular.module('postsList', [
  uiRouter
])

.component('postsList', postsListComponent)

.name;

export default postsListModule;

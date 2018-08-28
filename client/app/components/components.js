import angular from 'angular';
import Posts from './posts/posts'

let componentModule = angular.module('app.components', [
  Posts
])

.name;

export default componentModule;

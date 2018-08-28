import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsComponent from './posts.component';
import postsList from './postsList/postsList';
import postsDetails from './postsDetails/postsDetails';
import postsService from './posts.service';

let postsModule = angular
  .module('posts', [
    uiRouter,
    postsList,
    postsDetails,
    postsService
  ])

  .config($stateProvider => {
    'ngInject';

    $stateProvider.state('posts', {
      url: '/posts',
      component: 'posts'
    });
  })

  .component('posts', postsComponent).name;

export default postsModule;

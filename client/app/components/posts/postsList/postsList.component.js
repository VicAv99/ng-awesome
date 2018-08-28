import template from './postsList.html';
import controller from './postsList.controller';
import './postsList.scss';

const bindings = {
  posts: '<',
  selected: '&'
}

let postsListComponent = {
  bindings,
  template,
  controller
};

export default postsListComponent;

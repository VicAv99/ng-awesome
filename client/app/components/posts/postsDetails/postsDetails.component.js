import template from './postsDetails.html';
import controller from './postsDetails.controller';
import './postsDetails.scss';

const bindings = {
  form: '<',
  selectedPost: '<',
  cancelled: '&'
}

let postsDetailsComponent = {
  bindings,
  template,
  controller
};

export default postsDetailsComponent;

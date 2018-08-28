import PostsListModule from './postsList';
import PostsListController from './postsList.controller';
import PostsListComponent from './postsList.component';
import PostsListTemplate from './postsList.html';

describe('PostsList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PostsListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PostsListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PostsListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PostsListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PostsListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PostsListController);
    });
  });
});

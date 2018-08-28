import PostsDetailsModule from './postsDetails';
import PostsDetailsController from './postsDetails.controller';
import PostsDetailsComponent from './postsDetails.component';
import PostsDetailsTemplate from './postsDetails.html';

describe('PostsDetails', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PostsDetailsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PostsDetailsController();
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
      expect(PostsDetailsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = PostsDetailsComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(PostsDetailsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(PostsDetailsController);
    });
  });
});

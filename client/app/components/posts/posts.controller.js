class PostsController {
  posts = [];
  selectedPost = {};
  constructor(postsService) {
    'ngInject';
    this.postsService = postsService;
  }

  $onInit() {
    this.initForm();
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService
      .getPosts()
      .then(res => this.posts = res.data)
      .catch(err => console.log('error', err));
  }

  initForm() {
    this.form = {
      id: null,
      username: '',
      content: ''
    }
  }

}

export default PostsController;

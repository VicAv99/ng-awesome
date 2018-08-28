class PostsController {
  posts = [];
  selectedPost = {};
  constructor(postsService) {
    'ngInject';
    this.postsService = postsService;
  }

  $onInit() {
    this.handleForm();
    this.getAllPosts();
  }

  selectPost(post) {
    this.selectedPost = Object.assign({}, post);
    this.form = Object.assign({}, post);
  }

  getAllPosts() {
    this.postsService
      .getPosts()
      .then(res => this.posts = res.data)
      .catch(err => console.log('error', err));
  }

  handleForm() {
    this.form = {
      id: null,
      username: '',
      content: ''
    }
  }

  reset() {
    this.handleForm();
    this.selectedPost = {};
  }

}

export default PostsController;

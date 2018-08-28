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

  searchPost(search) {
    this.postsService
      .searchPost(search)
      .then(res => this.posts = res.data)
      .catch(err => console.log('error', err));
  }

  save(post) {
    if (post.id) {
      this.updatePost(post);
    } else {
      this.createPost(post);
    };
  }

  createPost(post) {
    this.postsService
      .create(post)
      .then(res => this.getAllPosts())
      .catch(err => console.log('error', err))
      .finally(() => this.reset());
  }

  updatePost(post) {
    this.postsService
      .update(post)
      .then(res => this.getAllPosts())
      .catch(err => console.log('error', err))
      .finally(() => this.reset());
  }

  removePost(postId) {
    this.postsService
      .remove(postId)
      .then(res => this.getAllPosts())
      .catch(err => console.log('error', err))
      .finally(() => this.reset());
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

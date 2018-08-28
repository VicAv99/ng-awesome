import angular from 'angular';

class PostsService {
  url = 'https://levelup-json.now.sh/posts';
  constructor($http) {
    'ngInject';
    this.http = $http;
  }

  getPosts() {
    return this.http
      .get(this.url);
  }

  getPost(postId) {
    return this.http
      .get(`${this.url}/${postId}`);
  }

  searchPost(search) {
    const param = { params: { q: search } };
    return this.http
      .get(this.url, param);
  }

  create(post) {
    return this.http
      .post(this.url, post);
  }

  update(post) {
    return this.http
      .patch(`${this.url}/${post.id}`, post);
  }

  remove(postId) {
    return this.http
      .delete(`${this.url}/${postId}`);
  }

}

let postsService = angular
  .module('postsService', [])
  .service('postsService', PostsService).name;

export default postsService;

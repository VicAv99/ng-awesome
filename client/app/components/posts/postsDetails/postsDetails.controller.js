class PostsDetailsController {
  constructor() {}

  setValidation(field) {
    return {
      'has-error': field.$error.required && field.$touched
    };
  }

  determineValidation(field) {
    return field.$error.required && field.$touched;
  }
}

export default PostsDetailsController;

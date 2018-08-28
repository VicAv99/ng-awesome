class NavbarController {
  title = 'NG AWESOME!';
  links = [
    { path: 'posts', label: 'POSTS' }
  ];
  constructor() {
    this.form = {
      search: ''
    }
  }
}

export default NavbarController;

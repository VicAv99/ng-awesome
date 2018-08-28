class NavbarController {
  title = 'NG AWESOME!';
  links = [
    { path: 'home', label: 'HOME' },
    { path: 'posts', label: 'POSTS' }
  ];
  constructor() {
    this.form = {
      search: ''
    }
  }
}

export default NavbarController;

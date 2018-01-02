export default class Page {
  constructor(name) {
    this.title = `Page for ${name}`;
  }

  getPageTitle() {
    return this.title;
  }
}
import { AppPage } from './app.po';

describe('todoapp App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /* it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo App');
  }); */

   it('should display application title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Todoapp');
  });

});

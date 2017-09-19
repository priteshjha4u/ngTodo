import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('#tot')).getText();
  }

  getTitle() {
    return browser.getTitle()
  }
}

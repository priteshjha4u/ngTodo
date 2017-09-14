import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    //console && console.log && console.log('value ---> ' + element(by.css('#tot')).getText())
    return element(by.css('#tot')).getText();
  }

  getTitle() {
    //console.log(browser.getTitle())
    return browser.getTitle()
  }
}

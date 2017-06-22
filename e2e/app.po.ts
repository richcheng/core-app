import { browser, element, by } from 'protractor';

export class CoreAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('core-root h1')).getText();
  }
}

export class UbiCalculatorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ubi-calculator-app h1')).getText();
  }
}

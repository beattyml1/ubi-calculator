import { UbiCalculatorPage } from './app.po';

describe('ubi-calculator App', function() {
  let page: UbiCalculatorPage;

  beforeEach(() => {
    page = new UbiCalculatorPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ubi-calculator works!');
  });
});

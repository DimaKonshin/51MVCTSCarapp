import { Angular4CarAppPage } from './app.po';

describe('angular4-car-app App', () => {
  let page: Angular4CarAppPage;

  beforeEach(() => {
    page = new Angular4CarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

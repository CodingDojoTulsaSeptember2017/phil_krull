import { AnimalDemoPage } from './app.po';

describe('animal-demo App', () => {
  let page: AnimalDemoPage;

  beforeEach(() => {
    page = new AnimalDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

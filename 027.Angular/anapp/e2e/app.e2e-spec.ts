import { AnappPage } from './app.po';

describe('anapp App', () => {
  let page: AnappPage;

  beforeEach(() => {
    page = new AnappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

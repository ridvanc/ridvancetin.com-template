import { EmptyappPage } from './app.po';

describe('emptyapp App', () => {
  let page: EmptyappPage;

  beforeEach(() => {
    page = new EmptyappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

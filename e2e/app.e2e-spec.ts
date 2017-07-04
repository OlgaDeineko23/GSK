import { GskPage } from './app.po';

describe('gsk App', () => {
  let page: GskPage;

  beforeEach(() => {
    page = new GskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

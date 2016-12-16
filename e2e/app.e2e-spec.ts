import { GmailFrontendPage } from './app.po';

describe('gmail-frontend App', function() {
  let page: GmailFrontendPage;

  beforeEach(() => {
    page = new GmailFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

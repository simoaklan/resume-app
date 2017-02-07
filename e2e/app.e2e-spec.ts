import { FireApp1Page } from './app.po';

describe('fire-app1 App', function() {
  let page: FireApp1Page;

  beforeEach(() => {
    page = new FireApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

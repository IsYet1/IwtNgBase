import { QlPage } from './app.po';

describe('ql App', function() {
  let page: QlPage;

  beforeEach(() => {
    page = new QlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

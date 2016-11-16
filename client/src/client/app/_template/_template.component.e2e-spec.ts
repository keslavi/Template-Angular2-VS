describe('_Template', () => {

  beforeEach( () => {
    browser.get('/_template');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-_template h2')).getText()).toEqual('Features');
  });

});

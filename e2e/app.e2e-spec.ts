import { LearnCommunicationPage } from './app.po';

describe('learn-communication App', () => {
  let page: LearnCommunicationPage;

  beforeEach(() => {
    page = new LearnCommunicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

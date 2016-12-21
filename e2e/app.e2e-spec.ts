import { PlantFinderPage } from './app.po';

describe('plant-finder App', function() {
  let page: PlantFinderPage;

  beforeEach(() => {
    page = new PlantFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

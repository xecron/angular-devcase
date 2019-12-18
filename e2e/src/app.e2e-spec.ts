import { AppPage } from './app.po';
import {browser, logging, protractor} from 'protractor';

const origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  const args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(200);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  // This is only for showcase purpose to fun :)
  const showDemo = () => {
    if (!page.hasDataFetched) {
      page.fetchData();
    }

    page.toggleSidebar(); // Opens sidebar
    page.selectVehicleType();
    page.selectVehicleBrand();
    page.selectVehicleColor();
    page.resetFilters();
    page.selectVehicleType(2);
    page.selectVehicleBrand(1);
    page.selectVehicleColor(0);
    page.resetFilters();
    page.toggleSidebar();
  };

  it('should run the demo in maximized screen', () => {
    browser.driver.manage().window().maximize();

    page.navigateTo();
    showDemo();
  });

  it('should change the view port to tablet then run demo again', () => {
    page.navigateTo();

    const width = 900;
    const height = 600;
    browser.driver.manage().window().setSize(width, height);

    showDemo();
  });

  it('should change the view port to mobile then run demo again', () => {
    page.navigateTo();

    const width = 360;
    const height = 480;
    browser.driver.manage().window().setSize(width, height);

    showDemo();
  });

  afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
  });
});

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  get hasDataFetched(): boolean {
    return !!element(by.className('content-container'));
  }

  toggleSidebar(): void {
    element(by.className('sidebar-toggle')).click();
  }

  selectVehicleType(index = 0): void {
    element.all(by.className('mat-form-field')).get(0).click();
    element.all(by.className('mat-option')).get(index).click();
  }

  selectVehicleBrand(index = 0): void {
    element.all(by.className('mat-form-field')).get(1).click();
    element.all(by.className('mat-option')).get(index).click();
  }

  selectVehicleColor(index = 0): void {
    element.all(by.className('mat-form-field')).get(2).click();
    element.all(by.className('mat-option')).get(index).click();
  }

  resetFilters(): void {
    element(by.cssContainingText('.mat-button-base', 'Reset Filters')).click();
  }

  fetchData(): void {
    element(by.cssContainingText('.mat-button-base', 'Fetch Vehicles')).click();
  }

}

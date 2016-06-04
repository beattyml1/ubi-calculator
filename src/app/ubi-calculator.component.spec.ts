import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { UbiCalculatorAppComponent } from '../app/ubi-calculator.component';

beforeEachProviders(() => [UbiCalculatorAppComponent]);

describe('App: UbiCalculator', () => {
  it('should create the app',
      inject([UbiCalculatorAppComponent], (app: UbiCalculatorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ubi-calculator works!\'',
      inject([UbiCalculatorAppComponent], (app: UbiCalculatorAppComponent) => {
    expect(app.title).toEqual('ubi-calculator works!');
  }));
});

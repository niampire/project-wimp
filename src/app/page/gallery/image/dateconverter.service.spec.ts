import { TestBed } from '@angular/core/testing';

import { DateconverterService } from './dateconverter.service';

describe('DateconverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateconverterService = TestBed.get(DateconverterService);
    expect(service).toBeTruthy();
  });
});

var ms = Date.now(),
    dmy = [],

    date = new Date(ms);

dmy = [
  ('0' + date.getDate()).slice(-2),
  ('0' + (date.getMonth() + 1)).slice(-2),
  date.getFullYear()
];

document.querySelector('span').innerHTML = dmy.join('.');

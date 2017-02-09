/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GnsDataService } from './gns-data.service';

describe('GnsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnsDataService]
    });
  });

  it('should ...', inject([GnsDataService], (service: GnsDataService) => {
    expect(service).toBeTruthy();
  }));
});
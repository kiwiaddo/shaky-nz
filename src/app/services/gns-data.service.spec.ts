/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GnsServiceService } from './gns-service.service';

describe('GnsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnsServiceService]
    });
  });

  it('should ...', inject([GnsServiceService], (service: GnsServiceService) => {
    expect(service).toBeTruthy();
  }));
});

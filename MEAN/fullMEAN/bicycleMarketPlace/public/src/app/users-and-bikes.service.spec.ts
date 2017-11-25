import { TestBed, inject } from '@angular/core/testing';

import { UsersAndBikesService } from './users-and-bikes.service';

describe('UsersAndBikesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersAndBikesService]
    });
  });

  it('should be created', inject([UsersAndBikesService], (service: UsersAndBikesService) => {
    expect(service).toBeTruthy();
  }));
});

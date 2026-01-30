import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return 'Rachel Greens' when getUserdata() is called", () => {
    const username = service.getUserdata();
    expect(username).toBe('Rachel Greens');
  });

  it("should return 'Joey' when promise is consumed", async () => {
    const username = await service.getUserdataByPromise();
    expect(username).toEqual('Joey');
  });

  it("should return 'Chandler Bing' when observable is consumed", () => {
    service.getUserdataByObservable().subscribe((username) => {
      expect(username).toEqual('Chandler Bing');
    });
  });
});

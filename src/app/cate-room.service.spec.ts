import { TestBed } from '@angular/core/testing';

import { CateRoomService } from './cate-room.service';

describe('CateRoomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CateRoomService = TestBed.get(CateRoomService);
    expect(service).toBeTruthy();
  });
});

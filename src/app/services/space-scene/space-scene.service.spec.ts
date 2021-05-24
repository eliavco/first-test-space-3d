import { TestBed } from '@angular/core/testing';

import { SpaceSceneService } from './space-scene.service';

describe('SpaceSceneService', () => {
  let service: SpaceSceneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceSceneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

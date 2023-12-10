import { TestBed } from '@angular/core/testing';

import { BadWordsService } from './bad-words.service';

describe('BadWordsService', () => {
  let service: BadWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

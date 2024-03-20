import { TestBed } from '@angular/core/testing';

import { TaskTracker00013940Service } from './task-tracker-00013940.service';

describe('TaskTracker00013940Service', () => {
  let service: TaskTracker00013940Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskTracker00013940Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CustomNativeExtensionService } from './custom-native-extension.service';

describe('CustomNativeExtensionService', () => {
  let service: CustomNativeExtensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomNativeExtensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

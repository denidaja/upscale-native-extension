import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNativeExtensionComponent } from './custom-native-extension.component';

describe('CustomNativeExtensionComponent', () => {
  let component: CustomNativeExtensionComponent;
  let fixture: ComponentFixture<CustomNativeExtensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNativeExtensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNativeExtensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

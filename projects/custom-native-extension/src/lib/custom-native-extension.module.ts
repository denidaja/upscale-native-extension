import {NgModule} from '@angular/core';
import {CustomNativeExtensionComponent} from './custom-native-extension.component';
import {RegistrationService} from '@upscale/web-storefront-sdk';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [CustomNativeExtensionComponent],
  imports: [
    CommonModule
  ],
  exports: [CustomNativeExtensionComponent]
})
export class UpscaleExtensionModule {
  constructor(private registrationServices: RegistrationService,) {
    // the value 'my-custom-component' has to be defined used in Workbench as the Native Extension "Key"
    this.registrationServices.register('my-custom-component', CustomNativeExtensionComponent);
  }
}

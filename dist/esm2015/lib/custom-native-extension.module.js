import { NgModule } from '@angular/core';
import { CustomNativeExtensionComponent } from './custom-native-extension.component';
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import * as i1 from "@upscale/web-storefront-sdk";
export class CustomNativeExtensionModule {
    constructor(registrationServices) {
        this.registrationServices = registrationServices;
        // the value 'my-custom-component' has to be defined used in Workbench as the Native Extension "Key"
        this.registrationServices.register('my-custom-component', CustomNativeExtensionComponent);
    }
}
CustomNativeExtensionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionModule, deps: [{ token: i1.RegistrationService }], target: i0.ɵɵFactoryTarget.NgModule });
CustomNativeExtensionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionModule, declarations: [CustomNativeExtensionComponent], imports: [CommonModule], exports: [CustomNativeExtensionComponent] });
CustomNativeExtensionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CustomNativeExtensionComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [CustomNativeExtensionComponent]
                }]
        }], ctorParameters: function () { return [{ type: i1.RegistrationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW5hdGl2ZS1leHRlbnNpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvY3VzdG9tLW5hdGl2ZS1leHRlbnNpb24vc3JjL2xpYi9jdXN0b20tbmF0aXZlLWV4dGVuc2lvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVuRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7OztBQVM3QyxNQUFNLE9BQU8sMkJBQTJCO0lBQ3RDLFlBQW9CLG9CQUF5QztRQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQzNELG9HQUFvRztRQUNwRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDNUYsQ0FBQzs7d0hBSlUsMkJBQTJCO3lIQUEzQiwyQkFBMkIsaUJBTnZCLDhCQUE4QixhQUUzQyxZQUFZLGFBRUosOEJBQThCO3lIQUU3QiwyQkFBMkIsWUFMN0I7WUFDUCxZQUFZO1NBQ2I7MkZBR1UsMkJBQTJCO2tCQVB2QyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUM5QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q3VzdG9tTmF0aXZlRXh0ZW5zaW9uQ29tcG9uZW50fSBmcm9tICcuL2N1c3RvbS1uYXRpdmUtZXh0ZW5zaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlZ2lzdHJhdGlvblNlcnZpY2V9IGZyb20gJ0B1cHNjYWxlL3dlYi1zdG9yZWZyb250LXNkayc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDdXN0b21OYXRpdmVFeHRlbnNpb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtDdXN0b21OYXRpdmVFeHRlbnNpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbU5hdGl2ZUV4dGVuc2lvbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVnaXN0cmF0aW9uU2VydmljZXM6IFJlZ2lzdHJhdGlvblNlcnZpY2UsKSB7XG4gICAgLy8gdGhlIHZhbHVlICdteS1jdXN0b20tY29tcG9uZW50JyBoYXMgdG8gYmUgZGVmaW5lZCB1c2VkIGluIFdvcmtiZW5jaCBhcyB0aGUgTmF0aXZlIEV4dGVuc2lvbiBcIktleVwiXG4gICAgdGhpcy5yZWdpc3RyYXRpb25TZXJ2aWNlcy5yZWdpc3RlcignbXktY3VzdG9tLWNvbXBvbmVudCcsIEN1c3RvbU5hdGl2ZUV4dGVuc2lvbkNvbXBvbmVudCk7XG4gIH1cbn1cbiJdfQ==
import { NgModule } from '@angular/core';
import { CustomNativeExtensionComponent } from './custom-native-extension.component';
import { CommonModule } from "@angular/common";
import * as i0 from "@angular/core";
import * as i1 from "@upscale/web-storefront-sdk";
export class UpscaleExtensionModule {
    constructor(registrationServices) {
        this.registrationServices = registrationServices;
        // the value 'my-custom-component' has to be defined used in Workbench as the Native Extension "Key"
        this.registrationServices.register('my-custom-component', CustomNativeExtensionComponent);
    }
}
UpscaleExtensionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: UpscaleExtensionModule, deps: [{ token: i1.RegistrationService }], target: i0.ɵɵFactoryTarget.NgModule });
UpscaleExtensionModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: UpscaleExtensionModule, declarations: [CustomNativeExtensionComponent], imports: [CommonModule], exports: [CustomNativeExtensionComponent] });
UpscaleExtensionModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: UpscaleExtensionModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: UpscaleExtensionModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CustomNativeExtensionComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [CustomNativeExtensionComponent]
                }]
        }], ctorParameters: function () { return [{ type: i1.RegistrationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW5hdGl2ZS1leHRlbnNpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvY3VzdG9tLW5hdGl2ZS1leHRlbnNpb24vc3JjL2xpYi9jdXN0b20tbmF0aXZlLWV4dGVuc2lvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUVuRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7OztBQVM3QyxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFlBQW9CLG9CQUF5QztRQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBQzNELG9HQUFvRztRQUNwRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDNUYsQ0FBQzs7bUhBSlUsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBTmxCLDhCQUE4QixhQUUzQyxZQUFZLGFBRUosOEJBQThCO29IQUU3QixzQkFBc0IsWUFMeEI7WUFDUCxZQUFZO1NBQ2I7MkZBR1Usc0JBQXNCO2tCQVBsQyxRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLDhCQUE4QixDQUFDO29CQUM5QyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q3VzdG9tTmF0aXZlRXh0ZW5zaW9uQ29tcG9uZW50fSBmcm9tICcuL2N1c3RvbS1uYXRpdmUtZXh0ZW5zaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge1JlZ2lzdHJhdGlvblNlcnZpY2V9IGZyb20gJ0B1cHNjYWxlL3dlYi1zdG9yZWZyb250LXNkayc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtDdXN0b21OYXRpdmVFeHRlbnNpb25Db21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtDdXN0b21OYXRpdmVFeHRlbnNpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFVwc2NhbGVFeHRlbnNpb25Nb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZ2lzdHJhdGlvblNlcnZpY2VzOiBSZWdpc3RyYXRpb25TZXJ2aWNlLCkge1xuICAgIC8vIHRoZSB2YWx1ZSAnbXktY3VzdG9tLWNvbXBvbmVudCcgaGFzIHRvIGJlIGRlZmluZWQgdXNlZCBpbiBXb3JrYmVuY2ggYXMgdGhlIE5hdGl2ZSBFeHRlbnNpb24gXCJLZXlcIlxuICAgIHRoaXMucmVnaXN0cmF0aW9uU2VydmljZXMucmVnaXN0ZXIoJ215LWN1c3RvbS1jb21wb25lbnQnLCBDdXN0b21OYXRpdmVFeHRlbnNpb25Db21wb25lbnQpO1xuICB9XG59XG4iXX0=
import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@upscale/service-client-angular';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@upscale/web-storefront-sdk';

class CustomNativeExtensionService {
    constructor() { }
}
CustomNativeExtensionService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
CustomNativeExtensionService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class CustomNativeExtensionComponent {
    constructor(productService) {
        this.productService = productService;
        this.timesBought = null;
    }
    ngOnInit() {
        let tokenizedURL = window.location.href.split("/");
        let productId = tokenizedURL[tokenizedURL.length - 1];
        this.productService.getProductById(productId).subscribe((product) => {
            if (!product["attributeSets"][0]) {
                setTimeout(() => {
                    this.timesBought = null;
                }, 0);
            }
            else {
                setTimeout(() => {
                    this.timesBought = product.attributeSets[0].values[0].value;
                }, 0);
            }
        });
    }
}
CustomNativeExtensionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionComponent, deps: [{ token: i1.ProductService }], target: i0.ɵɵFactoryTarget.Component });
CustomNativeExtensionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: CustomNativeExtensionComponent, selector: "lib-custom-native-extension", ngImport: i0, template: "<div *ngIf=\"timesBought\" class=\"times-bought-container\">\n  <p class=\"times-bought-text\">\n    \uD83D\uDD25\uD83D\uDD25 This product has been bought {{timesBought}} times in the last 24 hours.\n  </p>\n</div>\n", styles: [".times-bought-container{text-align:center;margin-top:20px}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: CustomNativeExtensionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-custom-native-extension',
                    templateUrl: "./custom-native-extension.component.html",
                    styleUrls: ['./custom-native-extension.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.ProductService }]; } });

class UpscaleExtensionModule {
    constructor(registrationServices) {
        this.registrationServices = registrationServices;
        // the value 'my-custom-component' has to be defined used in Workbench as the Native Extension "Key"
        this.registrationServices.register('my-custom-component', CustomNativeExtensionComponent);
    }
}
UpscaleExtensionModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: UpscaleExtensionModule, deps: [{ token: i1$1.RegistrationService }], target: i0.ɵɵFactoryTarget.NgModule });
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
        }], ctorParameters: function () { return [{ type: i1$1.RegistrationService }]; } });

/*
 * Public API Surface of custom-native-extension
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CustomNativeExtensionComponent, CustomNativeExtensionService, UpscaleExtensionModule };
//# sourceMappingURL=custom-native-extension.js.map

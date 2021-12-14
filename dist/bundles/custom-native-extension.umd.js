(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@upscale/service-client-angular'), require('@angular/common'), require('@upscale/web-storefront-sdk')) :
    typeof define === 'function' && define.amd ? define('custom-native-extension', ['exports', '@angular/core', '@upscale/service-client-angular', '@angular/common', '@upscale/web-storefront-sdk'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["custom-native-extension"] = {}, global.ng.core, global.i1, global.ng.common, global.i1$1));
})(this, (function (exports, i0, i1, i2, i1$1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);

    var CustomNativeExtensionService = /** @class */ (function () {
        function CustomNativeExtensionService() {
        }
        return CustomNativeExtensionService;
    }());
    CustomNativeExtensionService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CustomNativeExtensionService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var CustomNativeExtensionComponent = /** @class */ (function () {
        function CustomNativeExtensionComponent(productService) {
            this.productService = productService;
            this.timesBought = null;
        }
        CustomNativeExtensionComponent.prototype.ngOnInit = function () {
            var _this = this;
            var tokenizedURL = window.location.href.split("/");
            var productId = tokenizedURL[tokenizedURL.length - 1];
            this.productService.getProductById(productId).subscribe(function (product) {
                if (!product["attributeSets"][0]) {
                    setTimeout(function () {
                        _this.timesBought = null;
                    }, 0);
                }
                else {
                    setTimeout(function () {
                        _this.timesBought = product.attributeSets[0].values[0].value;
                    }, 0);
                }
            });
        };
        return CustomNativeExtensionComponent;
    }());
    CustomNativeExtensionComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionComponent, deps: [{ token: i1__namespace.ProductService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    CustomNativeExtensionComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: CustomNativeExtensionComponent, selector: "lib-custom-native-extension", ngImport: i0__namespace, template: "<div *ngIf=\"timesBought\" class=\"times-bought-container\">\n  <p class=\"times-bought-text\">\n    \uD83D\uDD25\uD83D\uDD25 This product has been bought {{timesBought}} times in the last 24 hours.\n  </p>\n</div>\n", styles: [".times-bought-container{text-align:center;margin-top:20px}\n"], directives: [{ type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-custom-native-extension',
                        templateUrl: "./custom-native-extension.component.html",
                        styleUrls: ['./custom-native-extension.component.scss'],
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.ProductService }]; } });

    var CustomNativeExtensionModule = /** @class */ (function () {
        function CustomNativeExtensionModule(registrationServices) {
            this.registrationServices = registrationServices;
            // the value 'my-custom-component' has to be defined used in Workbench as the Native Extension "Key"
            this.registrationServices.register('my-custom-component', CustomNativeExtensionComponent);
        }
        return CustomNativeExtensionModule;
    }());
    CustomNativeExtensionModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionModule, deps: [{ token: i1__namespace$1.RegistrationService }], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    CustomNativeExtensionModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionModule, declarations: [CustomNativeExtensionComponent], imports: [i2.CommonModule], exports: [CustomNativeExtensionComponent] });
    CustomNativeExtensionModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionModule, imports: [[
                i2.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: CustomNativeExtensionModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [CustomNativeExtensionComponent],
                        imports: [
                            i2.CommonModule
                        ],
                        exports: [CustomNativeExtensionComponent]
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace$1.RegistrationService }]; } });

    /*
     * Public API Surface of custom-native-extension
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CustomNativeExtensionComponent = CustomNativeExtensionComponent;
    exports.CustomNativeExtensionModule = CustomNativeExtensionModule;
    exports.CustomNativeExtensionService = CustomNativeExtensionService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=custom-native-extension.umd.js.map

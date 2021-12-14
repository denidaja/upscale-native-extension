import { OnInit } from '@angular/core';
import { ProductService } from "@upscale/service-client-angular";
import * as i0 from "@angular/core";
export declare class CustomNativeExtensionComponent implements OnInit {
    private productService;
    timesBought: string;
    constructor(productService: ProductService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomNativeExtensionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomNativeExtensionComponent, "lib-custom-native-extension", never, {}, {}, never, never>;
}

import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@upscale/service-client-angular";
import * as i2 from "@angular/common";
export class CustomNativeExtensionComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLW5hdGl2ZS1leHRlbnNpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvY3VzdG9tLW5hdGl2ZS1leHRlbnNpb24vc3JjL2xpYi9jdXN0b20tbmF0aXZlLWV4dGVuc2lvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi9wcm9qZWN0cy9jdXN0b20tbmF0aXZlLWV4dGVuc2lvbi9zcmMvbGliL2N1c3RvbS1uYXRpdmUtZXh0ZW5zaW9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7QUFTaEQsTUFBTSxPQUFPLDhCQUE4QjtJQUd6QyxZQUNVLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUh4QyxnQkFBVyxHQUFXLElBQUksQ0FBQztJQUszQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDTjtpQkFBTTtnQkFDTCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM5RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDTjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MkhBdkJVLDhCQUE4QjsrR0FBOUIsOEJBQThCLG1FQ1QzQywwTkFLQTsyRkRJYSw4QkFBOEI7a0JBTjFDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLDBDQUEwQztvQkFDdkQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7aUJBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Byb2R1Y3RTZXJ2aWNlLH0gZnJvbSBcIkB1cHNjYWxlL3NlcnZpY2UtY2xpZW50LWFuZ3VsYXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWN1c3RvbS1uYXRpdmUtZXh0ZW5zaW9uJyxcbiAgdGVtcGxhdGVVcmw6IFwiLi9jdXN0b20tbmF0aXZlLWV4dGVuc2lvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tbmF0aXZlLWV4dGVuc2lvbi5jb21wb25lbnQuc2NzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIEN1c3RvbU5hdGl2ZUV4dGVuc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRpbWVzQm91Z2h0OiBzdHJpbmcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGxldCB0b2tlbml6ZWRVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIi9cIik7XG4gICAgbGV0IHByb2R1Y3RJZCA9IHRva2VuaXplZFVSTFt0b2tlbml6ZWRVUkwubGVuZ3RoIC0gMV07XG5cbiAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHByb2R1Y3RJZCkuc3Vic2NyaWJlKChwcm9kdWN0KSA9PiB7XG4gICAgICBpZiAoIXByb2R1Y3RbXCJhdHRyaWJ1dGVTZXRzXCJdWzBdKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudGltZXNCb3VnaHQgPSBudWxsO1xuICAgICAgICB9LCAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy50aW1lc0JvdWdodCA9IHByb2R1Y3QuYXR0cmlidXRlU2V0c1swXS52YWx1ZXNbMF0udmFsdWU7XG4gICAgICAgIH0sIDApXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJ0aW1lc0JvdWdodFwiIGNsYXNzPVwidGltZXMtYm91Z2h0LWNvbnRhaW5lclwiPlxuICA8cCBjbGFzcz1cInRpbWVzLWJvdWdodC10ZXh0XCI+XG4gICAg8J+UpfCflKUgVGhpcyBwcm9kdWN0IGhhcyBiZWVuIGJvdWdodCB7e3RpbWVzQm91Z2h0fX0gdGltZXMgaW4gdGhlIGxhc3QgMjQgaG91cnMuXG4gIDwvcD5cbjwvZGl2PlxuIl19
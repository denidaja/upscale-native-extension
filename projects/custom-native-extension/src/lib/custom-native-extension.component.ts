import {Component, OnInit} from '@angular/core';
import {ProductService,} from "@upscale/service-client-angular";

@Component({
  selector: 'lib-custom-native-extension',
  templateUrl: "./custom-native-extension.component.html",
  styleUrls: ['./custom-native-extension.component.scss'],
})

export class CustomNativeExtensionComponent implements OnInit {
  timesBought: string = null;

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    let tokenizedURL = window.location.href.split("/");
    let productId = tokenizedURL[tokenizedURL.length - 1];

    this.productService.getProductById(productId).subscribe((product) => {
      if (!product["attributeSets"][0]) {
        setTimeout(() => {
          this.timesBought = null;
        }, 0)
      } else {
        setTimeout(() => {
          this.timesBought = product.attributeSets[0].values[0].value;
        }, 0)
      }
    });
  }
}

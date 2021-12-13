import {Component, OnInit} from '@angular/core';
import {
  Product,
  ProductService,
} from "@upscale/service-client-angular";

@Component({
  selector: 'lib-custom-native-extension',
  templateUrl: "./custom-native-extension.component.html",
  styleUrls: ['./custom-native-extension.component.scss'],
})
export class CustomNativeExtensionComponent implements OnInit {

  timesBought: Number = null;
  productName: String = "";

  constructor(
    private productService: ProductService,
  ) {
  }

  ngOnInit(): void {
    let tokenizedURL = window.location.href.split("/");
    let productId = tokenizedURL[tokenizedURL.length - 1];

    let observer = this.productService.getProductById(productId).subscribe({
      next: this.readProduct, error: console.log, complete: () => this.streamEnded(observer)
    });
  }

  streamEnded(observer: any): void {
    observer.unsubscribe();
  }


  readProduct(product: Product): void {
    this.productName = product.name;
    this.timesBought = product['timesBought'] ?? null;

    console.log(this.productName);
  }

}

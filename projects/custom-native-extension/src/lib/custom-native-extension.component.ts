import {Component, OnInit} from '@angular/core';
import {
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
    this.productService.getProductById("prod_id_8835").subscribe((product) => {
      this.productName = product.name;
      console.log(this.productName);

      this.timesBought = product['timesBought'] ?? null;
    });
  }

}

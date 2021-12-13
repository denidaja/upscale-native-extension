import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-native-extension',
  template: `
    <p>
      custom-native-extension works!
    </p>
  `,
  styles: [
  ]
})
export class CustomNativeExtensionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

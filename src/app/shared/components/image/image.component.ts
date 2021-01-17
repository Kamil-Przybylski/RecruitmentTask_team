import { Component, Input } from '@angular/core';
import { ImageUrls } from '@core/models/common.models';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [],
})
export class ImageComponent {
  @Input() imageUrls!: ImageUrls;

  constructor() {}
}

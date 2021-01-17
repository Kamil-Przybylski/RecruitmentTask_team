import { Component, Input } from '@angular/core';
import { MemberInfo } from '@core/models/member.models';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styles: [],
})
export class DescriptionComponent {
  @Input() member!: MemberInfo;

  constructor() {}
}

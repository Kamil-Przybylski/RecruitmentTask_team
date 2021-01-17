import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styles: [
  ]
})
export class EmptyStateComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() message: string = 'No data to show.';

  constructor() { }

  ngOnInit(): void {
  }

}

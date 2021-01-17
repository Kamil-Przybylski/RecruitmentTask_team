import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './components/image/image.component';
import { DescriptionComponent } from './components/description/description.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

@NgModule({
  declarations: [ImageComponent, DescriptionComponent, LoadingSpinnerComponent, EmptyStateComponent],
  imports: [CommonModule],
  exports: [ImageComponent, DescriptionComponent, LoadingSpinnerComponent, EmptyStateComponent],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardMembersComponent } from './components/dashboard-page/dashboard-members/dashboard-members.component';

@NgModule({
  declarations: [DashboardPageComponent, DashboardMembersComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}

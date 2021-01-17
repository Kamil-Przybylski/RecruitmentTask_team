import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.DASHBOARD, pathMatch: 'full' },

  {
    path: AppRoutes.DASHBOARD,
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  { path: AppRoutes.NOT_FOUND, component: PageNotFoundComponent },
  { path: '**', redirectTo: AppRoutes.NOT_FOUND },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

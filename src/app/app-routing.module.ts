import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSearchFormComponent } from './car-search-form/car-search-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'car-search', component: CarSearchFormComponent },
  { path: 'car-list', 
    loadChildren: ()=> import('./car-list/car-list.module').then(m => m.CarListModule)
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

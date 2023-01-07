import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationListComponent } from './application-list/application-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ApplicationListComponent }, // entry omponent
  {
    path: 'application/:name',
    loadChildren: () =>
      import('./application-details/application-details.module').then(
        (m) => m.ApplicationDetailsModule
      ),
  }, // Lazy loading route
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

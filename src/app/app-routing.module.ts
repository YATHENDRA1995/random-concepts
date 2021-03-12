import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateService } from './guards/can-activate.service';
import { CanDeactivateService } from './guards/can-deactivate.service';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  {
    path: 'layout',
    loadChildren: () => import('src/app/layout/layout.module').then(m => m.LayoutModule),
    canActivate: [CanActivateService],
    canDeactivate: [CanDeactivateService]
  },
  {
    path: 'login',
    loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
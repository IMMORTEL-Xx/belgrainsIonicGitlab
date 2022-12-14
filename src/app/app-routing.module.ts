import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsloggedGuard } from './core/guards/islogged.guard';

const routes: Routes = [
  { path: '', redirectTo: 'cooperateur', pathMatch: 'full'},
  { path: 'authentification', loadChildren: () => import('./features/authentification/authentification.module').then( m => m.AuthentificationPageModule) },
  { path: 'cooperateur', canLoad:[IsloggedGuard], loadChildren: () => import('./features/cooperateur/cooperateur.module').then( m => m.CooperateurPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CooperateurPage } from './cooperateur.page';

const routes: Routes = [
  {path: '', component: CooperateurPage, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
    { path: 'orders', loadChildren: () => import('./pages/orders/orders.module').then( m => m.OrdersPageModule) },
    { path: 'sales', loadChildren: () => import('./pages/sales/sales.module').then( m => m.SalesPageModule) },
    { path: 'stocks', loadChildren: () => import('./pages/stocks/stocks.module').then( m => m.StocksPageModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooperateurPageRoutingModule {}




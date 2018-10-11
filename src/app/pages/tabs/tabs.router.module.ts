import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ParkListPage } from '../park-list/park-list.page';
import { ParkMapPage } from '../park-map/park-map.page';
import { ParkDetailsPage } from '../park-details/park-details.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // Tab 1
      {
        path: 'parks',
        component: ParkListPage,
        outlet: 'parks'
      },
      {
        path: 'detail/:parkID',
        component: ParkDetailsPage,
        outlet: 'parks'
      },
      // Tab 2
      {
        path: 'map',
        outlet: 'map',
        component: ParkMapPage
      },
      {
        path: 'detail/:parkID',
        component: ParkDetailsPage,
        outlet: 'map'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(parks:parks)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

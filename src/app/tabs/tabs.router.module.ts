import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'parks',
        children: [
          {
            path: '',
            loadChildren: '../park-list/park-list.module#ParkListPageModule'
          },
          {
            path: 'detail/:parkID',
            loadChildren: '../park-details/park-details.module#ParkDetailsPageModule'
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../park-map/park-map.module#ParkMapPageModule'
          },
          {
            path: 'detail/:parkID',
            loadChildren: '../park-details/park-details.module#ParkDetailsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/parks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/parks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}

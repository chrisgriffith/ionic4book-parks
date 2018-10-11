import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ParkListPageModule } from '../park-list/park-list.module';
import { ParkMapPageModule } from '../park-map/park-map.module';
import { ParkDetailsPageModule } from '../park-details/park-details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ParkListPageModule,
    ParkMapPageModule,
    ParkDetailsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}

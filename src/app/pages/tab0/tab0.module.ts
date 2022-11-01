import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab0Page } from './tab0.page';

import { Tab0RoutingModule } from './tab0-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  declarations: [Tab0Page],

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab0RoutingModule,
    ExploreContainerComponentModule,
  ],
})
export class Tab0Module {}

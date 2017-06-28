import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { VibrantGradientsComponent } from './gradients/vibrant-gradients.component';
import { SubtleGradientsComponent } from './gradients/subtle-gradients.component';
import { PreloadersComponent } from './preloaders/preloaders.component';
import { MdSidenavModule, MdTabsModule, MdIconModule, MdButtonModule } from '@angular/material';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  imports: [ CommonModule, ComponentsRoutingModule, SharedModule,  MdTabsModule,
    MdSidenavModule, MdIconModule, MdButtonModule ],
  declarations: [ VibrantGradientsComponent, SubtleGradientsComponent, PreloadersComponent, ComingSoonComponent ],
  exports: []
})
export class ComponentsModule {
}

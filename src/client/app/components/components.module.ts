import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { VibrantGradientsComponent } from './gradients/vibrant-gradients.component';
import { SubtleGradientsComponent } from './gradients/subtle-gradients.component';
import { PreloadersComponent } from './preloaders/preloaders.component';

@NgModule({
  imports: [ CommonModule, ComponentsRoutingModule, SharedModule ],
  declarations: [ VibrantGradientsComponent, SubtleGradientsComponent, PreloadersComponent ],
  exports: []
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VibrantGradientsComponent } from './gradients/vibrant-gradients.component';
import { SubtleGradientsComponent } from './gradients/subtle-gradients.component';
import { PreloadersComponent } from './preloaders/preloaders.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'gradients/vibrant', component: VibrantGradientsComponent},
      {path: 'gradients/subtle', component: SubtleGradientsComponent},
      {path: 'preloaders', component: PreloadersComponent}
    ])
  ],
  exports: [ RouterModule ]
})
export class ComponentsRoutingModule {
}

import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-preloaders',
  templateUrl: 'preloaders.component.html',
  animations: [],
  host: {  'class': 'router-outlet' }
})
export class PreloadersComponent {
}

import { Component } from '@angular/core';
import { Gradient } from './gradients';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-vibrant-gradients',
  templateUrl: 'vibrant-gradients.component.html',
  animations: [],
  host: {  'class': 'router-outlet' }
})
export class VibrantGradientsComponent {

  vibrantGradients = [
    new Gradient('Sunrise', 'vibrant1', 'f7c256', 'ff5e00'),
    new Gradient('Sunset', 'vibrant2', 'ff6a00', 'ee0979'),
    new Gradient('Candy Floss', 'vibrant3', 'e26bd4', '9f3bea'),
    new Gradient('Starfall', 'vibrant4', '973cfd', 'f5df44'),
    new Gradient('Pacific', 'vibrant5', '00ffad', '5fcdf7'),
    new Gradient('Electric', 'vibrant6', '913eef', '2f9dfb'),
    new Gradient('Vice', 'vibrant7', 'e41ee6', '07dbf1'),
    new Gradient('Aqua Marine', 'vibrant8', '1bfbfb', '0a86f1'),
  ];


  scrollimateOptions: any = {
    section1: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 150,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section2: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 300,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section3: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 300,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section4: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 250,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section5: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 250,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section6: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 300,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    }
  }

}

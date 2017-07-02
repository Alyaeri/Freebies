import { Component } from '@angular/core';
import { Gradient } from './gradients';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-subtle-gradients',
  templateUrl: 'subtle-gradients.component.html',
  animations: [],
  host: {'class': 'router-outlet'}
})
export class SubtleGradientsComponent {

  subtleGradients = [
    new Gradient('Canary', 'amber1', 'FFF8E1', 'FFECB3'),
    new Gradient('Dandelion', 'amber2', 'FDE499', 'E2B324'),
    new Gradient('Maize', 'amber3', 'FFC107', 'FFA000'),
    new Gradient('Mango Tango', 'amber4', 'E88E1B', 'BD5C11'),

    new Gradient('Tangerine', 'red1', 'FFEBEE', 'fba0a0'),
    new Gradient('Bittersweet', 'red2', 'f57e7e', 'f95d52'),
    new Gradient('Scarlet', 'red3', 'f96055', 'C62828'),
    new Gradient('Venetian Red', 'red4', 'b72020', '500101'),

    new Gradient('Sherbet', 'pink1', 'fce4f4', 'ffc9e2'),
    new Gradient('Blush', 'pink2', 'f59ab9', 'f96295'),
    new Gradient('Magenta', 'pink3', 'e64e81', 'd40f57'),
    new Gradient('Maroon', 'pink4', 'b9165e', '54012d'),

    new Gradient('Orchid', 'purple1', 'F3E5F5', 'E1BEE7'),
    new Gradient('Lavender', 'purple2', 'c682d2', 'a739b9'),
    new Gradient('Violet', 'purple3', 'ac52bd', '890d8a'),
    new Gradient('Eggplant', 'purple4', '872d98', '470348'),

    new Gradient('Cornflower', 'blue1', 'E3F2FD', 'BBDEFB'),
    new Gradient('Cerulean', 'blue2', '93caf7', '2f9af1'),
    new Gradient('Indigo', 'blue3', '309aef', '0c64bb'),
    new Gradient('Celestial ', 'blue4', '2364af', '04214e'),

    new Gradient('Seafoam', 'teal1', 'E0F2F1', 'B2DFDB'),
    new Gradient('Caribbean ', 'teal2', '70c7bf', '42ada3'),
    new Gradient('Meadow', 'teal3', '2aa79b', '007b6f'),
    new Gradient('Aqua Marine', 'teal4', '047d6e', '002d26'),

    new Gradient('Grass', 'green1', 'E8F5E9', 'a1daa3'),
    new Gradient('Fern', 'green2', '8fca91', '57af5c'),
    new Gradient('Rain Forest', 'green3', '4CAF50', '2d8030'),
    new Gradient('Pine', 'green4', '2d7731', '143517'),

    new Gradient('Wind', 'blue-grey1', 'ECEFF1', 'CFD8DC'),
    new Gradient('Casper', 'blue-grey2', 'B0BEC5', '78909C'),
    new Gradient('Steel', 'blue-grey3', '6d8c9a', '506771'),
    new Gradient('Midnight', 'blue-grey4', '4a5d67', '131b1f'),

    new Gradient('Smoke', 'grey1', 'FAFAFA', 'dedddd'),
    new Gradient('Slate', 'grey2', 'cccccc', '9c9c9c'),
    new Gradient('Azure', 'grey3', '8a8989', '585858'),
    new Gradient('Charcoal', 'grey4', '525252', '0e0e0e'),
  ];
}

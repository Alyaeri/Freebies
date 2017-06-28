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
    new Gradient('Amber1', 'amber1', 'FFF8E1', 'FFECB3'),
    new Gradient('Amber2', 'amber2', 'FDE499', 'E2B324'),
    new Gradient('Amber3', 'amber3', 'FFC107', 'FFA000'),
    new Gradient('Amber4', 'amber4', 'E88E1B', 'BD5C11'),

    new Gradient('Red1', 'red1', 'FFEBEE', 'fba0a0'),
    new Gradient('Red2', 'red2', 'f57e7e', 'f95d52'),
    new Gradient('Red3', 'red3', 'f96055', 'C62828'),
    new Gradient('Red4', 'red4', 'b72020', '500101'),

    new Gradient('Pink1', 'pink1', 'fce4f4', 'ffc9e2'),
    new Gradient('Pink2', 'pink2', 'f59ab9', 'f96295'),
    new Gradient('Pink3', 'pink3', 'e64e81', 'd40f57'),
    new Gradient('Pink4', 'pink4', 'b9165e', '54012d'),

    new Gradient('Purple1', 'purple1', 'F3E5F5', 'E1BEE7'),
    new Gradient('Purple2', 'purple2', 'c682d2', 'a739b9'),
    new Gradient('Purple3', 'purple3', 'ac52bd', '890d8a'),
    new Gradient('Purple4', 'purple4', '872d98', '470348'),

    new Gradient('Blue1', 'blue1', 'E3F2FD', 'BBDEFB'),
    new Gradient('Blue2', 'blue2', '93caf7', '2f9af1'),
    new Gradient('Blue3', 'blue3', '309aef', '0c64bb'),
    new Gradient('Blue4', 'blue4', '2364af', '04214e'),

    new Gradient('Teal1', 'teal1', 'E0F2F1', 'B2DFDB'),
    new Gradient('Teal2', 'teal2', '70c7bf', '42ada3'),
    new Gradient('Teal3', 'teal3', '2aa79b', '007b6f'),
    new Gradient('Teal4', 'teal4', '047d6e', '002d26'),

    new Gradient('Green1', 'green1', 'E8F5E9', 'a1daa3'),
    new Gradient('Green2', 'green2', '8fca91', '57af5c'),
    new Gradient('Green3', 'green3', '4CAF50', '2d8030'),
    new Gradient('Green4', 'green4', '2d7731', '143517'),

    new Gradient('Blue Grey1', 'blue-grey1', 'ECEFF1', 'CFD8DC'),
    new Gradient('Blue Grey2', 'blue-grey2', 'B0BEC5', '78909C'),
    new Gradient('Blue Grey3', 'blue-grey3', '6d8c9a', '506771'),
    new Gradient('Blue Grey4', 'blue-grey4', '4a5d67', '131b1f'),

    new Gradient('Grey1', 'grey1', 'FAFAFA', 'dedddd'),
    new Gradient('Grey2', 'grey2', 'cccccc', '9c9c9c'),
    new Gradient('Grey3', 'grey3', '8a8989', '585858'),
    new Gradient('Grey4', 'grey4', '525252', '0e0e0e'),
  ];
}

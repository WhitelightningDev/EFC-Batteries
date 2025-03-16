import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeListService {
  constructor() {}

  getBikes(): string[] {
    return [
      'BMW R1200GS',
      'Kawasaki Ninja ZX-10R',
      'Yamaha YZF-R1',
      'Suzuki Hayabusa',
      'Ducati Panigale V4',
      'Harley-Davidson Iron 883',
      'Honda CBR1000RR'
    ];
  }
}

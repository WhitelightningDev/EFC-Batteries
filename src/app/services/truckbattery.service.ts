import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TruckBatteryService {
  batteryData = [
    {
      brand: 'Chevrolet',
      models: [
        { year: '1955>', model: 'All American, Australian C & K Series 6 & 8', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '1972-77', model: 'Cyl.', batterySize: '630', alternative: '634', technology: 'SMF' },
        { year: '1972-77', model: 'L.U.V. Local manufacture', batterySize: '630', alternative: '634', technology: 'SMF' },
        { year: '1974-80', model: 'L.U.V. Imported', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '1997>', model: 'El Toro, Nomad, C31, K20, 4 x 4', batterySize: '622', alternative: '', technology: 'SMF' },
        { year: '2004>', model: 'Blazer', batterySize: '639', alternative: '621', technology: 'SMF' },
        { year: '2004>', model: 'Lumina, Lumina SS', batterySize: '638', alternative: '', technology: 'SMF' },
        { year: '2010>', model: 'Corsa Petrol All', batterySize: '628', alternative: '646', technology: 'SMF' },
        { year: '2010>', model: 'Corsa Diesel', batterySize: '651', alternative: '', technology: 'SMF' },
        { year: '2013>', model: 'Spark Pronto 1.3', batterySize: '621', alternative: '', technology: 'SMF' },
      ]
    },
    {
      brand: 'Colt',
      models: [
        { year: '1969-71', model: 'Colt LDV & Panel Van', batterySize: '630', alternative: '634', technology: 'SMF' },
        { year: '1996>', model: '1.6, 2.0, 2.6 HiLine', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '1996>', model: '2.5 Diesel', batterySize: '652', alternative: '', technology: 'SMF' },
        { year: '1996>', model: '2.6, 3.OL V6 Rodeo & 3000 V6 4 X 4', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '1999>', model: '2.8 D, 2.8TDI Diesel', batterySize: '657', alternative: '', technology: 'SMF' },
        { year: '1999>', model: '2.0, 2.4, 3.0 Petrol', batterySize: '622', alternative: '638', technology: 'SMF' },
      ]
    },
    {
      brand: 'Fiat',
      models: [
        { year: '1978>', model: '128 Series', batterySize: '610', alternative: '622', technology: 'SMF' },
        { year: '1992>', model: 'UNO Panel Van', batterySize: '618', alternative: '628', technology: 'SMF' },
        { year: '2005>', model: 'Ducato', batterySize: '651', alternative: '', technology: 'SMF' },
        { year: '2005>', model: 'Starda EL, ELX', batterySize: '612', alternative: '618', technology: 'SMF' },
        { year: '2012>', model: 'Fiorino', batterySize: '612', alternative: '', technology: 'SMF' },
      ]
    },
    {
      brand: 'Ford',
      models: [
        { year: '1983-93', model: 'Bantam', batterySize: '618', alternative: '646', technology: 'SMF' },
        { year: '1986>', model: 'Courier All petrol', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '1986>', model: 'Courier Diesel incl 2500 Turbo Diesel', batterySize: '622', alternative: '639', technology: 'SMF' },
        { year: '1986>', model: 'Husky', batterySize: '650', alternative: '', technology: 'SMF' },
        { year: '1990>', model: 'Spectron', batterySize: '621', alternative: '638', technology: 'SMF' },
        { year: '1992>', model: 'Magnum', batterySize: '638', alternative: '639', technology: 'SMF' },
        { year: '1993>', model: 'Bantam 1.3, 1.6, 1.6I', batterySize: '622', alternative: '', technology: 'SMF' },
        { year: '1999>', model: 'New Courier 2500TD Leisure All Diesel Models', batterySize: '621', alternative: '', technology: 'SMF' },
        { year: '2000>', model: 'Ranger all diesel models', batterySize: '650', alternative: '', technology: 'SMF' },
        { year: '2000>', model: 'Ranger all petrol models', batterySize: '650', alternative: '638', technology: 'SMF' },
        { year: '2002>', model: 'New Bantam (Petrol)', batterySize: '618', alternative: '628', technology: 'SMF' },
        { year: '2002>', model: 'New Bantam (Diesel)', batterySize: '646', alternative: '647', technology: 'SMF' },
        { year: '2004>', model: 'Ranger 4.0L', batterySize: '651', alternative: '', technology: 'SMF' },
        { year: '2005>', model: 'F250', batterySize: '652', alternative: '639', technology: 'SMF' },
        { year: '2005>', model: 'Gazelle', batterySize: '651', alternative: '', technology: 'SMF' },
        { year: '2007>', model: 'Ford Ranger Petrol all Models', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '2007>', model: 'Ford Ranger Diesel all Models', batterySize: '650', alternative: '', technology: 'SMF' },
        { year: '2007>', model: 'Ford Ranger 4,0i SuperCab XLT Hi-Trail all Models', batterySize: '646', alternative: '', technology: 'SMF' },
        { year: '2007>', model: 'Ford Territory all Models', batterySize: '646', alternative: '', technology: 'SMF' },
        { year: '2011>', model: 'Ford Ranger T6 Petrol', batterySize: '651', alternative: '', technology: 'SMF' },
        { year: '2011>', model: 'Ford Ranger 3.2 D', batterySize: '668', alternative: '651', technology: 'SMF' },
        { year: '2012>', model: 'Ford Ranger 2.2 TDCI', batterySize: '651', alternative: '668', technology: 'SMF' },
      ]
    },
    {
      brand: 'Foton',
      models: [
        { year: '2007>', model: 'Panel Van 2.2', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '2007>', model: 'View 2.2 TAXI', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '2007>', model: '2.8 TD Single& Double Cab and de Lux', batterySize: '638', alternative: '', technology: 'SMF' },
        { year: '2007>', model: '2.2 Wagon de Lux', batterySize: '622', alternative: '', technology: 'SMF' },
        { year: '2012>', model: 'Foton 2.8 LDV Cummins', batterySize: '650', alternative: '', technology: 'SMF' },
      ]
    },
    {
      brand: 'Fudi',
      models: [
        { year: '2007>', model: 'Fudi Lion 2.2 all Models', batterySize: '622', alternative: '', technology: 'SMF' },
        { year: '2007>', model: 'Fudi Lion 2.8 all Models', batterySize: '638', alternative: '', technology: 'SMF' },
      ]
    },
    {
      brand: 'Gaz',
      models: [
        { year: '2007>', model: 'Gazelle Single Cab', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '2007>', model: 'Gazelle Bus x 96 and XTH', batterySize: '622', alternative: '638', technology: 'SMF' },
        { year: '2007>', model: 'Gazelle Double Cab', batterySize: '622', alternative: '638', technology: 'SMF' },
      ]
    },
  ]
    getBatteryData() {
      return this.batteryData;
    }
  }

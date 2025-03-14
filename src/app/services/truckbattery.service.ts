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
    {
    brand: 'Hyundai',
    models: [
      { year: '1997>', model: '2.5 & 2.6 iDT', batterySize: '674', alternative: '', technology: 'SMF' },
      { year: '1997>', model: '2.6 ID Panelwagon', batterySize: '650', alternative: '', technology: 'SMF' },
      { year: '1997>', model: 'Mini Bus, Van H100 LDV', batterySize: '622', alternative: '', technology: 'SMF' },
      { year: '2007>', model: 'Hyundai H100 Diesel', batterySize: '650', alternative: '', technology: 'SMF' },
      { year: '2009>', model: 'H1 All', batterySize: '650', alternative: '', technology: 'SMF' },
    ]
  },
  {
    brand: 'Isuzu',
    models: [
      { year: '1977-88', model: 'TLD 23, 43, 63 Elfin & Elf, Trooper All Diesel', batterySize: '671', alternative: '638', technology: 'SMF' },
      { year: '1978-81', model: 'TLD 24, NKR 55', batterySize: '630', alternative: '', technology: 'SMF' },
      { year: '1982-88', model: 'KB20, KB25', batterySize: '638', alternative: '', technology: 'SMF' },
      { year: '1982-93', model: 'KB All Diesel', batterySize: '622', alternative: '637', technology: 'SMF' },
      { year: '1983-86', model: 'KB All Petrol', batterySize: '622', alternative: '657', technology: 'SMF' },
      { year: '1986-89', model: 'TLD 44A, 54A', batterySize: '689', alternative: '657', technology: 'SMF' },
      { year: '1988-93', model: 'NKR 99, NPR 99', batterySize: '638', alternative: '', technology: 'SMF' },
      { year: '1993>', model: 'KB All Diesel', batterySize: '650', alternative: '', technology: 'SMF' },
      { year: '1993>', model: 'KB All Diesel 250, 280, Frontier incl 4x4', batterySize: '637', alternative: '', technology: 'SMF' },
      { year: '1995>', model: 'KB All Petrol, 160, 200, 230, 260, 320, Frontier incl 4x4', batterySize: '637', alternative: '', technology: 'SMF' },
      { year: '2004>', model: 'Trooper 4x4', batterySize: '637', alternative: '', technology: 'SMF' },
      { year: '2004>', model: 'Frontier incl 4x4', batterySize: '669', alternative: '', technology: 'SMF' },
      { year: '2007>', model: 'Isuzu New Range LDV’s Diesel', batterySize: '657', alternative: '', technology: 'SMF' },
      { year: '2007>', model: 'Isuzu New Range LDV’s Petrol', batterySize: '657', alternative: '', technology: 'SMF' },
      { year: '2007>', model: 'Isuzu KB Petrol all Models', batterySize: '637', alternative: '657', technology: 'SMF' },
      { year: '2007>', model: 'Isuzu KB Diesel all Models', batterySize: '669', alternative: '', technology: 'SMF' },
      { year: '2011>', model: 'Isuzu KB 240', batterySize: '652', alternative: '', technology: 'SMF' },
      { year: '2013>', model: 'Isuzu KB 250 & 300', batterySize: '669', alternative: '', technology: 'SMF' },
    ]
  },
  {
    brand: 'KIA',
    models: [
      { year: '2005>', model: 'K2700 LDV', batterySize: '650', alternative: '', technology: 'SMF' },
      { year: '2005>', model: 'Pregio', batterySize: '622', alternative: '', technology: 'SMF' },
      { year: '2007>', model: 'K2700 Workhorse', batterySize: '650', alternative: '', technology: 'SMF' },
    ]
  },
  {
    brand: 'Nissan',
    models: [
      { year: '1982>', model: 'Safari & Tracker Diesel Models', batterySize: '650', alternative: '657', technology: 'SMF' },
      { year: '1982>', model: 'Safari & Tracker Petrol Models', batterySize: '622', alternative: '638', technology: 'SMF' },
      { year: '1987>', model: '720 Diesel & E20 Ambulance', batterySize: '674', alternative: '', technology: 'SMF' },
      { year: '1988>', model: '3.0 L 4 x 4 DCab & Stn/Wagon', batterySize: '652', alternative: '', technology: 'SMF' },
      { year: '1988>', model: 'All Hardbodies, Sani & Petrol LDVs except', batterySize: '622', alternative: '638', technology: 'SMF' },
      { year: '1988>', model: '3.0L 4 X 4', batterySize: '638', alternative: '', technology: 'SMF' },
      { year: '1993-99', model: 'All Hardbodies, Sani, Diesel', batterySize: '638', alternative: '638', technology: 'SMF' },
      { year: '1996-99', model: 'Nissan Petrol 2.4 and 3.0 V6', batterySize: '638', alternative: '', technology: 'SMF' },
      { year: '1999>', model: 'Nissan Diesel 2.7 and 3.2', batterySize: '610', alternative: '621', technology: 'SMF' },
      { year: '1999>', model: '1400 LDV', batterySize: '657', alternative: '', technology: 'SMF' },
      { year: '2000>', model: 'New Hardbody Petrol & Diesel', batterySize: '638', alternative: '638', technology: 'SMF' },
      { year: '2000>', model: 'Terrano, Patrol Petrol', batterySize: '657', alternative: '', technology: 'SMF' },
      { year: '2000>', model: 'Terrano, Patrol Diesel', batterySize: '671', alternative: '', technology: 'SMF' },
    ]
  },
  {
    brand: 'Toyota',
    models: [
      { year: '1975-87', model: 'Dyna & Landcruiser Diesel', batterySize: '650', alternative: '674', technology: 'SMF' },
      { year: '1975-92', model: 'Stout, Dyna, Landcruiser All Petrol', batterySize: '622', alternative: '638', technology: 'SMF' },
      { year: '1980-89', model: 'Hi Ace, Hi Lux All Models', batterySize: '622', alternative: '638', technology: 'SMF' },
      { year: '1982>', model: 'Corolla Panel Van, TUV, & Stallion', batterySize: '630', alternative: '634', technology: 'SMF' },
      { year: '1988-92', model: 'Dyna Diesel', batterySize: '674', alternative: '', technology: 'SMF' },
      { year: '1990>', model: 'Hi Ace All Models', batterySize: '635', alternative: '643', technology: 'SMF' },
      { year: '1990>', model: 'Hi Lux All Petrol', batterySize: '635', alternative: '643', technology: 'SMF' },
      { year: '1990>', model: 'Stallion, Venture, Van & TUV All Petrol', batterySize: '618', alternative: '628', technology: 'SMF' },
      { year: '1990>', model: 'Venture & Condor Diesel', batterySize: '628', alternative: '646', technology: 'SMF' },
      { year: '1990>', model: 'Venture & Condor Petrol', batterySize: '618', alternative: '628', technology: 'SMF' },
      { year: '1990-94', model: 'Hi Lux Diesel', batterySize: '643', alternative: '', technology: 'SMF' },
      { year: '1993>', model: 'Coaster Bus Diesel', batterySize: '650', alternative: '', technology: 'SMF' },
      { year: '1993>', model: 'Coaster Bus Petrol', batterySize: '622', alternative: '638', technology: 'SMF' },
      { year: '1993>', model: 'Land Cruiser Pick-up Diesel', batterySize: '650', alternative: '674', technology: 'SMF' },
      { year: '1993>', model: 'Land Cruiser Pick-up Petrol', batterySize: '639', alternative: '657', technology: 'SMF' },
      { year: '1993>', model: 'Venture 2.4 Diesel', batterySize: '643', alternative: '643', technology: 'SMF' },
      { year: '1994>', model: 'Raider & Hi Lux Diesel', batterySize: '657', alternative: '643', technology: 'SMF' },
      { year: '1994>', model: 'Raider Petrol', batterySize: '635', alternative: '657', technology: 'SMF' },
      { year: '1997>', model: 'Landcruiser & Prado Diesel', batterySize: '650', alternative: '639', technology: 'SMF' },
      { year: '1997>', model: 'Landcruiser & Prado Petrol', batterySize: '621', alternative: '628', technology: 'SMF' },
      { year: '1999>', model: 'Conquest Carri 1.3', batterySize: '618', alternative: '', technology: 'SMF' },
      { year: '1999>', model: 'Hi Lux Diesel 2.4 & 3.0', batterySize: '657', alternative: '', technology: 'SMF' },
      { year: '1999>', model: 'Hi Lux Petrol', batterySize: '646', alternative: '643', technology: 'SMF' },
      { year: '1999>', model: 'Hi-Ace', batterySize: '635', alternative: '', technology: 'SMF' },
      { year: '2003>', model: 'Hi Lux Petrol ALL', batterySize: '646', alternative: '', technology: 'SMF' },
      { year: '2003>', model: 'Hi Lux Diesel ALL', batterySize: '657', alternative: '', technology: 'SMF' },
      { year: '2005>', model: 'Hi Lux 2.5 2.7 Petrol', batterySize: '646', alternative: '', technology: 'SMF' },
      { year: '2005>', model: 'Hi Lux 4.0 Petrol', batterySize: '652', alternative: '', technology: 'SMF' },
      { year: '2005>', model: 'Hi Lux 2.5 Diesel', batterySize: '652', alternative: '', technology: 'SMF' },
      { year: '2005>', model: 'Hi Lux 3.0 Diesel', batterySize: '668', alternative: '652', technology: 'SMF' },
      { year: '2005>', model: 'Hi Lux 2.5td SRX', batterySize: '652', alternative: '652', technology: 'SMF' },
      { year: '2005>', model: 'Quantum', batterySize: '638', alternative: '', technology: 'SMF' },
    ]
  },
  {
    brand: 'Volkswagen',
    models: [
      { year: '1978-89', model: 'Kombi All', batterySize: '628', alternative: '628', technology: 'SMF' },
      { year: '1980-85', model: 'Kombi 2000cc', batterySize: '628', alternative: '', technology: 'SMF' },
      { year: '1981>', model: 'Golf Diesel LDV', batterySize: '647', alternative: '', technology: 'SMF' },
      { year: '1981>', model: 'Golf LDV', batterySize: '618', alternative: '628', technology: 'SMF' },
      { year: '1983-89', model: 'Kombi 1.9', batterySize: '628', alternative: '647', technology: 'SMF' },
      { year: '1989>', model: 'All Kombi, Van & LDV', batterySize: '647', alternative: '', technology: 'SMF' },
      { year: '1996>', model: 'Golf Caddy LDV', batterySize: '628', alternative: '647', technology: 'SMF' },
      { year: '2005>', model: 'LT 35 All Models P/Van', batterySize: '658', alternative: '', technology: 'SMF' },
      { year: '2005>', model: 'LT 46 All Models P/Van', batterySize: '658', alternative: '', technology: 'SMF' },
    ]
  },
  ]
    getBatteryData() {
      return this.batteryData;
    }
  }

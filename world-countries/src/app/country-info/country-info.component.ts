import { Component, Input, OnInit } from '@angular/core';
import { WorldAPIService } from 'src/shared/world-api.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {
  @Input() selectedCountryName!: string;
  countries: any[] = []; // Store the array of countries

  constructor(private worldapiService: WorldAPIService) {}

  ngOnInit(): void {
    this.worldapiService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.displayCountryInfo();
    });
  }

  displayCountryInfo() {
    const selectedCountryCode = this.selectedCountryName;

    // Find the matching country object
    const country = this.getCountryByCode(selectedCountryCode);

    if (country) {
      // Display the country information
      console.log(country);
      // You can update your component state with this country data
    } else {
      console.log('Country not found.');
    }
  }

  getCountryByCode(iso2Code: string): any {
    for (let i = 0; i < this.countries.length; i++) {
      const currentArray = this.countries[i];
      if (Array.isArray(currentArray)) {
        for (let j = 0; j < currentArray.length; j++) {
          const currentObject = currentArray[j];
          if (currentObject && currentObject.iso2Code === iso2Code) {
            return currentObject;
          }
        }
      }
    }
    return null;
  }

  getCountryProperty(propertyName: string): any {
    // Use the getCountryByCode function to get the country object
    const country = this.getCountryByCode(this.selectedCountryName);

    if (country) {
      switch (propertyName) {
        case 'name':
          return country.name;
        case 'capitalCity':
          return country.capitalCity;
        case 'region.value':
          return country.region.value;
        case 'incomeLevel.value':
          return country.incomeLevel.value;
        case 'latitude':
          return country.latitude;
        case 'longitude':
          return country.longitude;
        default:
          return 'Property not found';
      }
    }
    return 'Data not available';
  }
}

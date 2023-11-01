import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'World Countries';
  selectedCountryName: string = ''; // Initialize as an empty string
  
  onCountrySelected(countryName: string) {
    // Handle the selected country name here
    this.selectedCountryName = countryName; // Set the selected country name
  }
  
}

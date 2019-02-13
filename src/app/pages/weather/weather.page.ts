import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.page.html',
	styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {

	results: Observable<any>;
	searchTerm: string = '';
	url_icon = 'https://openweathermap.org/img/w/'

	constructor(private weatherService : WeatherService) { }

	ngOnInit() {}
	searchChanged() {
		// Call our service function which returns an Observable
		this.results = this.weatherService.searchData(this.searchTerm);
	}
}

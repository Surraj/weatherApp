import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
	url = 'https://api.openweathermap.org/data/2.5/forecast/daily'
	appid = '9fd7a449d055dba26a982a3220f32aa2'
  weather = ''

  
  constructor(private http: HttpClient) { }




  searchData(title : string): Observable<any> {
    return this.http.get(`${this.url}?q=${encodeURI(title)}&appid=${this.appid}`).pipe(
      map(results =>results['list']

       )
      );
  }


  getDetails(id){
  	return this.http.get(`${this.url}?i=${id}&plot=full&appid=${this.appid}`)
  }


}

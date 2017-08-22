import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private http: Http
		) {

 	}
     
}
findCharacter(name){
    this.http.get('http://swapi.co/api/people/?search=' + name)
        .subscribe(response => this.results = response.json().results);
}
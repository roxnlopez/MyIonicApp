import { Component, NgModule } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

import { Subject } from 'rxjs/Subject';


import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	results;
	searchSubject = new Subject();

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private http: Http
		) {

 	}

 	ionViewDidLoad() {
 		this.searchSubject
 			.debounceTime(300)
 			.distinctUntilChanged()
 			.subscribe(name => {
 			this.http.get('http://swapi.co/api/people/?search=' + name)
        		.subscribe(response => this.results = response.json().results);
 		})
 	}

 	createAPIObservable(name) {
 		return this.http.get('http://swapi.co/api/people/?search=' + name)
 			.map(response => response.json().results);
 	}

 	findCharacter(name){
 		this.searchSubject.next(name);
	}
     
}

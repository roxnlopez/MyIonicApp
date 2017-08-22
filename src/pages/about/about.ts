import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

	constructor(
		public navCtrl: NavController, public navParams: NavParams,
		private http: Http
		) {

 	}
     
}
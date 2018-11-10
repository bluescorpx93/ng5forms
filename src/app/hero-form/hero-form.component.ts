import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
	selector: 'app-hero-form',
	templateUrl: './hero-form.component.html',
	styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

	constructor() { }

	powers = ['Really Smart', 'Super Flexible',
	'Super Hot', 'Weather Changer'];
	myModel = new Hero(18, 'Dr IQ', this.powers[0], 'Chucky Chuck');

	submitted = false;

	onSubmit(){
		this.submitted = true;
	}

	ngOnInit() {
	}

	newHero(){
		this.myModel = new Hero(42, '', '');
	}

	get diagnostic(){ return JSON.stringify(this.myModel)}

}

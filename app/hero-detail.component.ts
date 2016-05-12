import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from './hero.service';


@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

  private hero: Hero;

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);

  }

  constructor
  (private heroService:HeroService,
   private routeParams:RouteParams) { }

  goBack() {
    window.history.back();
  }

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */

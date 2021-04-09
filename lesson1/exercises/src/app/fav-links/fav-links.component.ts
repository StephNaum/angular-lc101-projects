import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ["https://education.launchcode.org/js-independent-track/chapters/angular-lsn1/exercises.html", "https://learn.launchcode.org/courses/280"];
  constructor() { }

  ngOnInit() {
  }

}

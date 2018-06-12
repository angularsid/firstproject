import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router){}

  selectedItem: any ;
  navLinks = [{
    "id": 1,
    "name": "Component 1",
    "route": "comp1"
  },
  {
    "id": 2,
    "name": "Component 2",
    "route": "comp2"
  },
  {
    "id": 3,
    "name": "Component 3",
    "route": "comp3"
  },
  {
    "id": 4,
    "name": "Component 4",
    "route": "comp4"
  }]
  ngOnInit() {

 this.selectedItem = this.navLinks[0].id;
 this.router.navigate(['comp1']);
  }
  }







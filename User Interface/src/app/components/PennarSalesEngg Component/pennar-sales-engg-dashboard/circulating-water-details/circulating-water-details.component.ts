import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-circulating-water-details',
  templateUrl: './circulating-water-details.component.html',
  styleUrls: ['./circulating-water-details.component.css']
})
export class CirculatingWaterDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}

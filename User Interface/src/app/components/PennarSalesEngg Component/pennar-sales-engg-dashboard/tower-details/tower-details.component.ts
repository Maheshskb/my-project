import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tower-details',
  templateUrl: './tower-details.component.html',
  styleUrls: ['./tower-details.component.css']
})
export class TowerDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Onclick()
  {
    this.router.navigateByUrl('/Makeup-Water-Details');
    return true;
  }
}

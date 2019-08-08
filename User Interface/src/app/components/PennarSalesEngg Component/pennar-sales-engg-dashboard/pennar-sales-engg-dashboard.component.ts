import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pennar-sales-engg-dashboard',
  templateUrl: './pennar-sales-engg-dashboard.component.html',
  styleUrls: ['./pennar-sales-engg-dashboard.component.css']
})
export class PennarSalesEnggDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Onclick()
  {
    this.router.navigateByUrl('/Customer-Data-Entry-Screen');
    return true;
  }
}

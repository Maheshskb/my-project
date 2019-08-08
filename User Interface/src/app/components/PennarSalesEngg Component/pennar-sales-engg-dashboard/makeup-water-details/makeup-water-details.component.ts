import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; 
@Component({
  selector: 'app-makeup-water-details',
  templateUrl: './makeup-water-details.component.html',
  styleUrls: ['./makeup-water-details.component.css']
})
export class MakeupWaterDetailsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Onclick()
  {
    this.router.navigateByUrl('/Circulating-Water-Details');
    return true;
  }
}

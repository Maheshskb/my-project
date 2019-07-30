import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public ngOnInit()
  {
    // TRIAL CODE FOR JQUERY TESING (CODE IS WORKING FOR JQUERY)
    // $(document).ready(function(){
    // $("button").click(function(){
    //  alert("Hello"); 
    // })
    // });
  }
  
}

import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.css']
})
export class RegistrationStep2Component implements OnInit {
  //declare an array of Towers
  Towers=[1,2,3,4,5,6,7,8,9,10];

  constructor() { }
  @Input() regForm: FormGroup;

  changed(e){
    // event comes as parameter, you'll have to find selectedData manually
    // by using e.target.data
    // alert("You want to contunie with selected value??");
    

}
  ngOnInit() {
    $(document).ready(function () {

      $('#mySelectValue').change(function(){
        alert($(this).val());
        localStorage.setItem('mySelectValue', $(this).val());
        $('#local').text(localStorage.getItem('mySelectValue'));
   });
      // alert("Hello");
      // localStorage["X"]="sddfsdf";
      // var value2 =  localStorage["X"];
      // alert(value2);
      $('.slct').change(function () {
          var value = $(this).val(); var toAppend = '';
         // document.getElementById("hidden_number").value= value;

          // this.getElementById("hidden_number").value=value
          // alert(document.getElementById("hidden_number").nodeValue);
          if (value == 0) {
             //document.write(" please select no of tower");
       alert("Hello please select value more than 0");
          }
           if (value == 1) {
            // localStorage["XXX"]=value.ToString();
            // alert(value.ToString());
            // var value1 =  localStorage["XXX"];
             
                 
            // alert(value1);
              toAppend = "<input type='textbox' id='txtInputValue' margin:20px; >"; $(".containers").html(toAppend); return;
              
          }
          if (value == 2) {
          //   localStorage["TWO"]=value.ToString();
          //    alert(value.ToString());
          //   var value2 =  localStorage["TWO"];
          //   alert(value2);  
            // value2=toAppend;
            toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;

          }
          if (value == 3) {
              toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;

          }
    if (value == 4) {
              toAppend = "<input type='textbox' >&nbsp;<br><input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;

          }
    if (value == 5) {
              toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;

          }
    if (value == 6) {
              toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;

          }
  if (value == 7) {
                toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;
  
            }
      if (value == 8) {
        toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;
  
            }
      if (value == 9) {
        toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;
  
            }
      if (value == 10) {
        toAppend = "<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >&nbsp;<input type='textbox' >"; $(".containers").html(toAppend); return;
  
            }
      });

  });
  }
  step2Submitted() {
    this.regForm.get('TowerDetails').get('NumOfTower').markAsTouched();
    this.regForm.get('TowerDetails').get('NumOfTower').updateValueAndValidity();

    this.regForm.get('TowerDetails').get('NameOfTower').markAsTouched();
    this.regForm.get('TowerDetails').get('NameOfTower').updateValueAndValidity();

    // alert( localStorage["XXX"]);
    // alert( localStorage["TWO"]);
    
  }
}

import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../service/data.service'
import { Http } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  providers: [IncidentService]
})
export class IncidentComponent implements OnInit {

indicatorDetails: any={
  key1:'',
  key2:'',
  key3:'',
  key4:'',
  key5:'',
};

name: string
incidentid: string
tags: string
triggerid: string
indictor: string
observable: string
threatactor: string
reconnaissance: string
weaponization: string
delivery: string
exploitation: string
installation: string
public myForm: FormGroup;

  constructor( public incidentService:IncidentService, private http: Http ) {}

  ngOnInit() {
    
  }

submit(formValues){
  console.log(formValues);

this.incidentService.submit(formValues).subscribe(
      response=>{
        console.log('success')
      },

      error=>
      {
        console.log('error')
      },
    )

}

submit2(){
  console.log('success');

this.incidentService.submit2().subscribe(
  response=>{
    console.log('successfull')
  },

  error=>
  {
    console.log('error');
  }
)
}


}

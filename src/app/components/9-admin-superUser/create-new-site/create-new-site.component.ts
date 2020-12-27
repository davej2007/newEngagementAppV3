import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { daysOfWeek } from '../../_custom/functions/dateFunctions';

@Component({
  selector: 'create-new-site',
  templateUrl: './create-new-site.component.html',
  styleUrls: ['./create-new-site.component.css']
})
export class CreateNewSiteComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) { }
    // form Get
    get site()          { return this.newSiteForm.get('site'); }
    get siteName()          { return this.newSiteForm.get('siteName');   }
    get weekStartDay()  { return this.newSiteForm.get('weekStartDay');  }
    get password()      { return this.newSiteForm.get('password');  }
    get siteOpenOn()    { return this.newSiteForm.get('siteOpenOn');  }  
    get contactName()   { return this.newSiteForm.get('contactName');}
    get contactTitle()  { return this.newSiteForm.get('contactTitle');   }
    get contactEmail()  { return this.newSiteForm.get('contactEmail');   }
    get contactNumber() { return this.newSiteForm.get('contactNumber');  }
    get addressLine()   { return this.newSiteForm.get('addressLine') as FormArray; }
    get postCode()      { return this.newSiteForm.get('postCode');  }
  // Variable Definitions
  selectedPage  : String = 'A0';
  daysOfWeek    : any = daysOfWeek(0);
  generate      : Boolean = false;
  processing    : Boolean = false;
  successMsg    : String = null;
  errorMsg      : String = null;

  // Reactive Form Definitions
  newSiteForm = this.fb.group({
    site          : ['', [Validators.required]],
    siteName          : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    weekStartDay  : ['', [Validators.required]],
    password      : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    siteOpenOn    : ['', [Validators.required]],
    contactName   : ['', [Validators.required]],
    contactTitle  : ['', [Validators.required]],
    contactNumber : ['', [Validators.required]],
    contactEmail  : ['', [Validators.required, Validators.email]],
    addressLine   : this.fb.array([ this.fb.control('')]),
    postCode      : ['', [Validators.required]]
  });
  ngOnInit(): void {
    console.log(this.daysOfWeek)
  }
  addAddressLine() {
    console.log('add address line', this.addressLine.value)
    if(this.addressLine.value[this.addressLine.value.length-1]!=''){
      console.log(this.addressLine)
      this.addressLine.push(this.fb.control(''));
    }
  } 
}

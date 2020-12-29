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
  // Variable Definitions
  selectedPage  : String = 'A0';
  daysOfWeek    : any = daysOfWeek(0);
  generate      : Boolean = false;
  processing    : Boolean = false;
  successMsg    : String = null;
  errorMsg      : String = null;

  BasicSiteInfo = this.fb.group({
    SiteDetails: this.fb.group({
      siteReference: ['',[Validators.required]],
      siteContractName: ['',[Validators.required]],
      siteStartDate: ['',[Validators.required]],
      siteWeekStartDay: ['',[Validators.required]]
    }),
    ContactDetails: this.fb.group({
      contactName   : ['',[Validators.required]],
      contactTitle  : ['',[Validators.required]],
      telNumber : ['',[Validators.required]],
      contactEmail  : ['',[Validators.required]],
    }),
    SiteAddress: this.fb.group({
      addressLine: this.fb.array([
        this.fb.control('')
      ]),
      postCode : ['']
    }),
    
  })
// Basic Info Form Gets
get SD_Ref()          { return this.BasicSiteInfo.get('SiteDetails.siteReference'); } 
get SD_Name()         { return this.BasicSiteInfo.get('SiteDetails.siteContractName'); } 
get SD_Date()         { return this.BasicSiteInfo.get('SiteDetails.siteStartDate'); } 
get SD_Day()          { return this.BasicSiteInfo.get('SiteDetails.siteWeekStartDay'); } 
get CD_Name()          { return this.BasicSiteInfo.get('ContactDetails.contactName'); } 
get CD_Title()          { return this.BasicSiteInfo.get('ContactDetails.contactTitle'); } 
get CD_Tel()          { return this.BasicSiteInfo.get('ContactDetails.telNumber'); } 
get CD_Email()          { return this.BasicSiteInfo.get('ContactDetails.contactEmail'); } 

get addressLine() {
  return this.BasicSiteInfo.get('SiteAddress.addressLine') as FormArray;
}
add_Line() {
  this.addressLine.push(this.fb.control(''));
}
  ngOnInit(): void {
    console.log(this.daysOfWeek)
  }
  
}

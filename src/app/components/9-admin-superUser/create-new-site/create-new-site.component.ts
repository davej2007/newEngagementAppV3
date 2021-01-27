import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { daysOfWeek } from '../../_custom/functions/dateFunctions';
import { toCapitalFirst } from '../../_custom/functions/functions';
import { getAdminValues, getJobTitles, getNoticeboardSections } from '../../_custom/functions/newDefaultValues';

const uri = environment.apiFileUpload+'/upload';

@Component({
  selector: 'create-new-site',
  templateUrl: './create-new-site.component.html',
  styleUrls: ['./create-new-site.component.css']
})
export class CreateNewSiteComponent implements OnInit {

  constructor(
    private fb:FormBuilder
  ) {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      let entry = JSON.parse(response);
      entry.imgSrc=environment.imageURL+'/uploads/'+entry.uploadname;
      entry.index = this.uploadedFileList.length;
      entry.used = false;       
      this.uploadedFileList.push(entry);
    };
   }
  // Variable Definitions
  selectedPage  : String = 'A0';
  daysOfWeek    : any = daysOfWeek(0);
  generate      : Boolean = false;
  processing    : Boolean = false;
  successMsg    : String = null;
  errorMsg      : String = null;
  
  employeeName  : String = 'Admin User';
  employeeNo    : String = '0000000';
  // Job Variables
  jobTitles     : any = getJobTitles;
  addJob        : String = null;
  errorJob      : String = null;
  addJobTitle   : any = [];
  errorJobTitle : any = [];
  // Notice Board Variables
  noticeboardSections : any = getNoticeboardSections;
  addNBSection  : any = [];
  errorNBSection: any = [];
  // Admin Section Variables
  adminSections :any = getAdminValues;

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
      postCode : ['',[Validators.required]]
    }),
    
  })
// Basic Info Form Gets
get SD_Ref()          { return this.BasicSiteInfo.get('SiteDetails.siteReference'); } 
get SD_Name()         { return this.BasicSiteInfo.get('SiteDetails.siteContractName'); } 
get SD_Date()         { return this.BasicSiteInfo.get('SiteDetails.siteStartDate'); } 
get SD_Day()          { return this.BasicSiteInfo.get('SiteDetails.siteWeekStartDay'); } 
get CD_Name()         { return this.BasicSiteInfo.get('ContactDetails.contactName'); } 
get CD_Title()        { return this.BasicSiteInfo.get('ContactDetails.contactTitle'); } 
get CD_Tel()          { return this.BasicSiteInfo.get('ContactDetails.telNumber'); } 
get CD_Email()        { return this.BasicSiteInfo.get('ContactDetails.contactEmail'); } 
get addressLine()     { return this.BasicSiteInfo.get('SiteAddress.addressLine') as FormArray; }
get postcode()        { return this.BasicSiteInfo.get('SiteAddress.postCode'); }

  // Functions For Basic Info Form

  // generatePassword(){
  //   this.generate = true;
  //   let temp = randomChar('capital')+randomChar('all')+randomChar('lower')+randomChar('all')+randomChar('all')
  //             +randomChar('lower')+randomChar('all')+randomChar('number')+randomChar('all')+randomChar('all')
  //             +randomChar('lower')+randomChar('all')+randomChar('capital')+randomChar('all')+randomChar('all')
  //   this.password.setValue(temp);
  //   this.generate = false;
  // } 
  add_Line() {
    if(this.addressLine.value[this.addressLine.value.length-1]!='')  this.addressLine.push(this.fb.control(''));
  }
  
  // variables for file upload
  uploader: FileUploader = new FileUploader({url: uri, itemAlias: 'photo'});
  uploadedFileList:any = [];
  selectedSiteImage = {index:-1, imgSrc: null, originalname: null, uploadname: null, used:false };
  selectedCanteenImage  = {index:-1, imgSrc: null, originalname: null, uploadname: null, used:false };
  
  // Initilize File Uploader
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

  }
  // Functions For Job Titles Sections
  newJob(addJob:String){
    if(addJob != undefined){
      addJob = toCapitalFirst(addJob.trim());
      if(this.jobTitles.findIndex((i: any ) => i.job === addJob) ==-1 && addJob!=''){
        this.jobTitles.push({job:addJob, title:[]});
        this.addJob=null;
        this.errorJob = null;
      } else {
        this.errorJob = 'Duplicate Job';
      }
    }
  };
  removeAllJobs(job:String){
    this.processing = true;
    let i = this.jobTitles.findIndex((i: any ) => i.job === job);
    if(i!=-1) this.jobTitles.splice(i,1);
    this.processing = false;
  };
  deleteJobTitle(job:any, j:Number){
    this.processing = true;
    let i = this.jobTitles.findIndex((i: any ) => i.job === job);
    if(i!=-1) {
      if(j<this.jobTitles[i].title.length){
        this.jobTitles[i].title.splice(j,1)
      }
    }
    this.processing = false;
  }
  newJobTitle(job:any,newTitle:String){
    this.processing = true;
    if(newTitle != undefined){
      newTitle = toCapitalFirst(newTitle.trim());
      let i = this.jobTitles.findIndex((i: any ) => i.job === job);
      if(i!=-1 && newTitle!='') {
        if(this.jobTitles[i].title.indexOf(newTitle)==-1){
          this.jobTitles[i].title.push(newTitle);
          this.addJobTitle[job]=null;
          this.errorJobTitle[job] = null;
        } else {
          this.errorJobTitle[job] = 'Duplicate Job Title';
        }
      }
    }
    this.processing = false;
  }
  // Functions For Noticeboard Sections
  deleteSectionTitle(dept:String, j:Number){
    this.processing = true;
    let i = this.noticeboardSections.findIndex((i : any) => i.department === dept);
    if(i!=-1) {
      if(j<this.noticeboardSections[i].title.length){
        this.noticeboardSections[i].title.splice(j,1)
      }
    }
    this.processing = false;
  }
  newNoticeboardTitle(dept:String, newTitle:String){
    this.processing = true;
    if(newTitle != undefined){
      newTitle = toCapitalFirst(newTitle.trim());
      let i = this.noticeboardSections.findIndex((i : any) => i.department === dept);
      if(i!=-1 && newTitle!='') {
        if(this.noticeboardSections[i].title.indexOf(newTitle)==-1){
          this.noticeboardSections[i].title.push(newTitle);
          this.addNBSection[i]=null;
          this.errorNBSection[i] = null;
        } else {
          this.errorNBSection[i] = 'Duplicate Noticeboard Section Title';
        }
      }
    }
    this.processing = false;
  }

}

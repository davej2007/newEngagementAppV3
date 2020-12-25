import { Injectable } from '@angular/core';

@Injectable()

export class AUTH_Service {
  // Authentication Variables
  public welcomeID :String = 'not yet defined';
  public employeeToken : String;
  public siteToken : String;
  public employee : IEMPLOYEE; 
  public admin : String = '011110011111111';
  public expTime : number;
  public currentSite : ISITE;
  public doNotDisturb : Boolean = false;
  public displayScreen : Boolean = false;

  constructor() { }
  
  adminRights(e:any){
    if(!!this.admin){
      for (var i = 0; i <= e.length; i++) {
        if (i==e.length){
          return false;
        } else {
          if(this.admin[e[i]]=='1') return true;
        }
      }
    }
    return false;
  }
}

interface IEMPLOYEE {
  id : String,
  number : String,
  Name : String,
  sites : [ISITE]
}
interface ISITE {
  id:String,
  name:String
}
import { AbstractControl } from "@angular/forms";

export const  aDayIs = 86400000,
              aWeekIs = 604800000,
              Months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

export function daysOfWeek(startWeek:number){
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].splice(startWeek,7);
}
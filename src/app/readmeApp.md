**** Angular 10 setup

ng new engagementapp --routing -S

ng add @angular/localize

**** boot strap instalation

npm i -s bootstrap @ng-bootstrap/ng-bootstrap

**** angular.json ****

"options": { "outputPath": "../nodeServer/public",

"styles": [ 
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css" ],
"scripts": []

**** App.Module.ts ****

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

imports: [NgbModule, ...],

// restart NG SERVE //

**** Generate Components

ng g m components/0-default/default --flat --routing

1. ng g c components/0-default/default-page-not-found --skipTests=true --prefix 
1. ng g c components/0-default/default-nav-bar --skipTests=true --prefix 
2. ng g s components/service/auth --skipTests=true 
3. ng g pipe components/custom/pipe/display.... --skipTests=true 
3. ng s -o ==== ng serve 
4. ng build --prod ==== ng build

err =>  {
  alert('Server Error : '+err.message+' If this continues Please contact Systems.');
}

findIndex((i: any ) => i.job === job)
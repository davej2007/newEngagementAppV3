<form  [formGroup]='newSiteForm'>
        <div class="form-row"><!-- Site Ref Code & Site Name -->
          <div class="form-group col-md-3">
            <label for="site">Site Ref Code : </label>
            <input type="text" class="form-control" aria-describedby="site"
              [class.is-invalid]='(site.invalid) && site.touched'
              [class.is-valid]='(site.valid) && site.touched'
              formControlName='site' id="site"
              placeholder="New Site Reference Code">
              <ul *ngIf='(site.invalid) && site.touched '> <!-- error messages -->
                <li *ngIf='site.errors?.required' class='text-danger'>Site Reference Code Is Required</li>
                <li *ngIf='site.errors?.isError' class='text-danger'>Site Reference Code Is 7 Characters Long</li>
              </ul>
          </div>
          <div class="form-group col-md-9">
            <label for="siteName">Site Name : </label>
            <input type="text" class="form-control" aria-describedby="siteName"
              [class.is-invalid]='siteName.invalid && siteName.touched '
              [class.is-valid]='siteName.valid && siteName.touched'
              formControlName='siteName' id="siteName" placeholder="Enter Your Site Name">
              <ul *ngIf='siteName.invalid && siteName.touched'> <!-- error messages -->
                <li *ngIf='siteName.errors?.required' class='text-danger'>Site Name Is Required</li>
                <li *ngIf='siteName.errors?.minlength || siteName.errors?.maxlength' class='text-danger'>Site Name Should Be Between 5 and 50 Letters Long</li>
                <li *ngIf='siteName.errors?.isError' class='text-danger'>Site Name Should Only Be Letters</li>
              </ul>
          </div>
        </div>
        
        <div class="form-row"><!-- Site Open On & Week Start Day -->
          <div class="form-group col-md-6">
            <label for="siteOpenOn">Site Opened On : </label>
            <input type="date" class="form-control" aria-describedby="siteOpenOn"
              [class.is-invalid]='(siteOpenOn.invalid) && siteOpenOn.touched'
              [class.is-valid]='(siteOpenOn.valid) && siteOpenOn.touched'
              formControlName='siteOpenOn' id="siteOpenOn">
              <ul *ngIf='(siteOpenOn.invalid) && siteOpenOn.touched '> <!-- error messages -->
                <li *ngIf='siteOpenOn.errors?.required' class='text-danger'>Date The Site Opened Is Required</li>
              </ul>
          </div>
          <div class="form-group col-md-6">
            <label for="weekStartDay">Week Start Day : </label>
            <select id="weekStartDay" class="form-control" formControlName='weekStartDay'>
              <option selected>Choose...</option>
              <option *ngFor='let r of daysOfWeek; let i=index;' [value]=i>{{ r }}</option>
            </select>
            <ul *ngIf='weekStartDay.invalid && weekStartDay.touched'> <!-- error messages -->
              <li *ngIf='weekStartDay.errors?.required' class='text-danger'>A Start Of Week Is Required</li>
            </ul>
          </div>
        </div>
        <div class="form-row"><!-- Site Contact Name & Site Contact Title -->
          <div class="form-group col-md-6">
            <label for="contactName">Site Contact Name : </label>
            <input type="text" class="form-control" aria-describedby="contactName"
              [class.is-invalid]='(contactName.invalid) && contactName.touched'
              [class.is-valid]='(contactName.valid) && contactName.touched'
              formControlName='contactName' id="contactName"
              placeholder="Enter Your Site's Contact Name">
              <ul *ngIf='(contactName.invalid) && contactName.touched '> <!-- error messages -->
                <li *ngIf='contactName.errors?.required' class='text-danger'>Site Contact Name Is Required</li>
                <li *ngIf='contactName.errors?.isError' class='text-danger'>Site Contact Name Should Be Between 5 and 50 Letters Long</li>
              </ul>
          </div>
          <div class="form-group col-md-6">
            <label for="contactTitle">Contact Title : </label>
            <input type="text" class="form-control" aria-describedby="contactTitle"
              [class.is-invalid]='contactTitle.invalid && contactTitle.touched '
              [class.is-valid]='contactTitle.valid && contactTitle.touched'
              formControlName='contactTitle' id="contactTitle" placeholder="Enter Your Contact Title">
              <ul *ngIf='(contactTitle.invalid) && contactTitle.touched'> <!-- error messages -->
                <li *ngIf='contactTitle.errors?.required' class='text-danger'>Contact Title Is Required</li>
              </ul>
          </div>
        </div>
        <div class="form-row"><!-- Site Contact Tel No & Site Contact Email -->
          <div class="form-group col-md-6">
            <label for="contactNumber">Contact Tel No : </label>
            <input type="text" class="form-control" aria-describedby="contactNumber"
              [class.is-invalid]='(contactNumber.invalid) && contactNumber.touched'
              [class.is-valid]='(contactNumber.valid) && contactNumber.touched'
              formControlName='contactNumber' id="contactNumber"
              placeholder="Enter Your Contact Telephone Number">
              <ul *ngIf='(contactNumber.invalid) && contactNumber.touched'> <!-- error messages -->
                <li *ngIf='contactNumber.errors?.required' class='text-danger'>Contact Telephone Number Is Required</li>
              </ul>
          </div>
          <div class="form-group col-md-6">
            <label for="contactEmail">Contact E Mail : </label>
            <input type="text" class="form-control" aria-describedby="contactEmail"
              [class.is-invalid]='contactEmail.invalid && contactEmail.touched '
              [class.is-valid]='contactEmail.valid && contactEmail.touched'
              formControlName='contactEmail' id="contactEmail" placeholder="Enter Your Contact Email">
              <ul *ngIf='(contactEmail.invalid) && contactEmail.touched'> <!-- error messages -->
                <li *ngIf='contactEmail.errors?.required' class='text-danger'>Contact Email Is Required</li>
                <li *ngIf='contactEmail.errors?.email' class='text-danger'>Valid EMail Required</li>
              </ul>
          </div>
        </div>
        <div class="form-group" formArrayName="addressLine"><!-- Site Address -->
          <label for="siteAddress">Site Address : </label><button (click)="addAlias()">Add Alias</button>
      
          <div *ngFor="let Line of addressLine.controls; let i=index">
            <!-- The repeated Line template -->
            <label>
              Line : {{ i}}
              <input aria-describedby="siteAddress"
                  [formControlName]="i" type="text" class="form-control" id="siteAddress"
                  placeholder="Address Line">
            </label>
          </div>
        </div>





        <div class="form-group"><!-- Site Address -->
          
          <!-- <div formArrayName="addressLine">
            <div *ngFor="let address of addressLine.controls; let i=index">
              <div class="input-group">
                <input aria-describedby="siteAddress"
                  [formControlName]="i" type="text" class="form-control" id="siteAddress"
                  placeholder="Address Line">
                <div class="input-group-append">
                  <button class="btn btn-outline-primary input-group-text" type="button" (click)="addAddressLine()">Add Line</button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </form>
      <p>
        Form Value: {{ newSiteForm.value | json }}
      </p>
     


      <!-- TS -->

        // Reactive Form Definitions
  newSiteForm = this.fb.group({          
    contact: this.fb.group({
      name   : ['', [Validators.required]],
      title  : ['', [Validators.required]],
      telNumber : ['', [Validators.required]],
      Email  : ['', [Validators.required, Validators.email]],
    }),
    address: this.fb.group({
      line: this.fb.array([
        this.fb.control('')
      ]),
      postCode      : ['', [Validators.required]]
    }),
    password      : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],

  });
addAddressLine() {
    console.log('add address line', this.addressLine.value)
    if(this.addressLine.value[this.addressLine.value.length-1]!=''){
      this.addressLine.push(this.fb.control(''));
    }
  }
  
  addAlias() {
    this.addressLine.push(this.fb.control(''));
  }

    get addressLine() {
      return this.newSiteForm.get('address.line') as FormArray;
    }
    get postCode()      { return this.newSiteForm.get('address.postCode');  }
get password()      { return this.newSiteForm.get('password');  }

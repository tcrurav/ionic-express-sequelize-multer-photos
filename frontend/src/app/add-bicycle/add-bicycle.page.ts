import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BicycleService } from '../services/bicycle.service';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bicycle',
  templateUrl: './add-bicycle.page.html',
  styleUrls: ['./add-bicycle.page.scss'],
})
export class AddBicyclePage implements OnInit {

  bicycleForm: FormGroup;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(public formBuilder: FormBuilder,
    private bicycleService: BicycleService,
    private photoService: PhotoService,
    private router: Router
  ) { 
    this.bicycleForm = this.formBuilder.group({
      brand: ['', [Validators.required]],
      model: ['', [Validators.required]]
    })
  }

  ionViewWillEnter() {
    this.bicycleForm.reset();
    this.isSubmitted = false;
    this.capturedPhoto = "";
  }

  ngOnInit() { }

  getFormControl(field: string) {
    return this.bicycleForm.get(field);
  }

  takePhoto() {
    // DECOMMENT:
    // this.photoService.takePhoto().then(data => {
    //   this.capturedPhoto = data.webPath? data.webPath : "";
    // });
  }

  pickImage() {
    // DECOMMENT:
    // this.photoService.pickImage().then(data => {
    //   this.capturedPhoto = data.webPath;
    // });
  }

  discardImage() {
    // DECOMMENT:
    // this.capturedPhoto = "";
  }

  async submitForm() {
    // DECOMMENT:
    // this.isSubmitted = true;
    // if (!this.bicycleForm.valid) {
    //   console.log('Please provide all the required values!')
    //   return;
    // } else {
    //   let blob = null;
    //   if (this.capturedPhoto != "") {
    //     const response = await fetch(this.capturedPhoto);
    //     blob = await response.blob();
    //   }

    //   this.bicycleService.createBicycle(this.bicycleForm.value, blob).subscribe(data => {
    //     console.log("Photo sent!");
    //     this.router.navigateByUrl("/list-bicycles");
    //   })
    // }
  }

}

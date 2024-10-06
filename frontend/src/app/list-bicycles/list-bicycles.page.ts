import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../services/bicycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-bicycles',
  templateUrl: './list-bicycles.page.html',
  styleUrls: ['./list-bicycles.page.scss'],
})
export class ListBicyclesPage implements OnInit {

  bicycles: any = [];

  constructor(private bicycleService: BicycleService, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllBicycles();
  }

  getAllBicycles() {
    this.bicycleService.getBicycles().subscribe(bikes => {
      console.log(bikes);
      this.bicycles = bikes;
    })
  }

  // DECOMMENT:
  // addBicycle(){
  //   this.router.navigateByUrl("/add-bicycle");
  // }
}

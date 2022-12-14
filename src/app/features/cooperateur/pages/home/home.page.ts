import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/features/authentification/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private dataservice: DataService) {}


  ngOnInit(): void {

    this.testAPI();

  };

  testAPI() : void {

    this.dataservice.testAPI().subscribe((x:any) => {

      console.log(x);
    });
  };
  
}

import { Component } from '@angular/core';
import { DataService } from './features/authentification/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isLogged = true;

  constructor(private dataservice : DataService) {}
  
  deconnect(){
    localStorage.clear();
  };
  

}
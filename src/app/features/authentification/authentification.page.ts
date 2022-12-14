import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  value: string = "";
  users: any;
  password: string = "";
  errorConnection: boolean = false;
  errorString : string = "";

  usersPost: { username: string, password: string } = {
    username: "robert",
    password: "1234="
  };

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {

    this.printUsers();

  };

  selected(valueSelected: string){
    this.value =valueSelected;
  };

  printUsers() {

    this.dataService.getUsers().subscribe((x: any) => {
      this.users = x;
    });
  };

  checkConnection() {
    this.dataService.checkConnection(this.usersPost).subscribe({
      next: (x : any) => {
        localStorage.setItem('Token', x.token);
        this.router.navigate(['cooperateur']);
      },

      error: err => {
        this.errorConnection = true;
        this.errorString = err.error;
      }

    });

  };

};

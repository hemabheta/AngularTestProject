import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/dataservice';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {
  public numberToshow: number = 0;
  public username: string = "";
  public usernameTwoWayBinding: string = "Test";
  constructor(
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
  }
  goBack() {
    this.router.navigate(['/']);
  }
  getrandomnumbervalue() {
    this.numberToshow = this.dataService.generateAndReturnRandomNumber();
  }
}
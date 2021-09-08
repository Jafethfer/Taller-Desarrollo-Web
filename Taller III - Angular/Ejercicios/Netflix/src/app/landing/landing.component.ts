import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LandingComponent implements OnInit {

  rutaBackground:String = '../../assets/img/landing.jpg'
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirigirLogin(){
    this.router.navigate(['login'])
  }

}

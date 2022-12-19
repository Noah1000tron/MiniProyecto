import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-basura',
  templateUrl: './basura.component.html',
  styleUrls: ['./basura.component.css']
})
export class BasuraComponent implements OnInit {

  constructor(private router:Router) { 
  }
  ngOnInit(): void {
    this.router.navigate(['/inicio']);
  }

}

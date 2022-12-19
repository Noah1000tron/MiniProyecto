import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:string| null;
  name:string| null;
  lastname:string| null;
  rol:string| null;

  constructor(private authservice:AuthService,private router:Router) { 
        this.name=localStorage.getItem("name");
        this.lastname=localStorage.getItem("lastname");
        this.login=localStorage.getItem("contact");
        this.rol=localStorage.getItem("rol");
  }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.authservice.cerrarSesion();
    localStorage.setItem("dato","0");
    this.router.navigate(['/basura']);
    
  }
  
}

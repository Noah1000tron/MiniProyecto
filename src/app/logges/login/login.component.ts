import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos:any;
  alerta:boolean=false;
  loginForm = new FormGroup({
    contact: new FormControl('',[Validators.required,Validators.email]),
    palabra: new FormControl('',[Validators.required]),
  });
  
  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService) { 
    this.loginForm = new FormGroup({
      contact: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      palabra: new FormControl('',[Validators.required]),
    });
  }
  
  ngOnInit(): void {
    
  }
  mostrar(){
    console.log(this.datos);
  }
  get contact() { return this.loginForm.get('contact'); }
  get palabra() { return this.loginForm.get('palabra'); }

  formularioEnviado(){
    
    if(this.loginForm.valid){
      this.authservice.autenticarUsuario(this.loginForm.value).subscribe(res => {
        this.datos=res;
        if(!this.datos.action){
          this.loginForm.reset();
          this.alerta=true;
          this.toastr.error('Los datos son incorrectos','Error' );
        } else{
          this.toastr.success('Disfruta de la pagina',`Bienvenido ${this.datos.data[0].name}`);
          localStorage.setItem("idUser",this.datos.data[0].idUser);
          localStorage.setItem("name",this.datos.data[0].name);
          localStorage.setItem("lastname",this.datos.data[0].lastname);
          localStorage.setItem("contact",this.datos.data[0].contact);
          localStorage.setItem("cellphone",this.datos.data[0].cellphone);
          localStorage.setItem("rol",this.datos.data[0].rol);
          localStorage.setItem("dato","0");
          this.router.navigate(['/inicio']);
          
        } });
    }
    /**/
  }

}

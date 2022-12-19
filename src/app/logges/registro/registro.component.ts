import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router,private toastr: ToastrService) { }
  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    contact: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    cellphone: new FormControl('',[Validators.required]),
    palabra: new FormControl('',[Validators.required]),
  });
  ngOnInit(): void {
  }
  get name() { return this.registerForm.get('name'); }
  get lastname() { return this.registerForm.get('lastname'); }
  get contact() { return this.registerForm.get('contact'); }
  get cellphone() { return this.registerForm.get('cellphone'); }
  get palabra() { return this.registerForm.get('palabra'); }
  formularioEnviado(){
    if(this.registerForm.valid){
    this.authservice.registrarUsuario(this.registerForm.value).subscribe(res => { console.log(res);
      const data:any=res;
    if(data.action==true){
      this.toastr.success('Se registro correctamente',`Bienvenido `);
      this.router.navigate(['/login']);
    }
    else this.toastr.error('Algo salio mal','Error' );
    });}
  }

}

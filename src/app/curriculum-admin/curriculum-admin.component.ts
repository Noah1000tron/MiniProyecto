import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-curriculum-admin',
  templateUrl: './curriculum-admin.component.html',
  styleUrls: ['./curriculum-admin.component.css']
})
export class CurriculumAdminComponent implements OnInit {
  rol:string|null;
  curriculum:any=[];
  curriculum1:any={}
  usuario:any={};
  constructor(private restService:RestService,private router:Router,private toastr: ToastrService) { 
    this.rol=localStorage.getItem("rol")
    if(this.rol){
      if(this.rol=="A")
      this.obtenerRelacionCurriculum();
      else if(this.rol=="U")
      this.obtenerRelacionCurriculumByUser();
    }else{
      this.router.navigate(['/login']);
    }
    
  }

  ngOnInit(): void {
  }
  obtenerRelacionCurriculum(){
    this.restService.obtenerCurriulum().subscribe(res => {
      console.log(res);
      this.curriculum=res;
    })
  }

  obtenerRelacionCurriculumByUser(){
    this.restService.obtenerCurriulumByUser(localStorage.getItem("idUser")).subscribe(res => {
      console.log(res);
      this.curriculum=res;
    })
  }
  eliminarRelacionCurriculumByUser(id:string){
    this.restService.cancelarCurriulumByUser(id).subscribe(res => {
      console.log(res);
      const data:any=res;
      if(data.action)this.toastr.success('Se eliminó correctamente','Exito!');
      else this.toastr.error(`${data.error}`,'Error' );
      this.obtenerRelacionCurriculumByUser();
    })
  }

  descargarArchivo(nombre:string){
    this.restService.obtenerArchivo(nombre).subscribe(res => {
      console.log(res)
      const downloadURL = window.URL.createObjectURL(res);
      saveAs(downloadURL,nombre);
    })
  }
  cargarusuario(i:any){
    this.usuario=i;
  }
  seleccionarCurriculum(i:any){
    console.log(i);
    this.curriculum1=i;
  }

}

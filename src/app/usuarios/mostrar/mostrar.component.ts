import { Component, ElementRef, OnInit } from '@angular/core';
import { AbcService } from 'src/app/abc.service';
import { VacantesService } from '../../vacantes.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RestService } from '../../rest.service';
import { Vacante } from '../../model/vacante';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  array: any [] = [];
  vacantes:any=[];
  vacanteso:any=[];
  vacante:any={id:0};
  ngOptions = ["Tabla","Tarjetas"];
  opcion:string=this.ngOptions[1];
  ngDropdown = this.ngOptions[1];
  rol:string|null;
  createForm = new FormGroup({
    nombrecomp: new FormControl('',[Validators.required]),
    fecha: new FormControl('',[Validators.required]),
    giro: new FormControl('',[Validators.required]),
    puesto: new FormControl('',[Validators.required]),
    experiencia: new FormControl('',[Validators.required]),
    modalidad: new FormControl('',[Validators.required]),
    sueldo: new FormControl('',[Validators.required]),
  });
  updateForm = new FormGroup({
    id: new FormControl(''),
    nombrecomp: new FormControl('',[Validators.required]),
    fecha: new FormControl('',[Validators.required]),
    giro: new FormControl('',[Validators.required]),
    puesto: new FormControl('',[Validators.required]),
    experiencia: new FormControl('',[Validators.required]),
    modalidad: new FormControl('',[Validators.required]),
    sueldo: new FormControl('',[Validators.required]),
  });
  filterForm = new FormGroup({
    filtrar: new FormControl(''),
    puesto: new FormControl(''),
    companiaBusqueda: new FormControl(''),
  });

  get nombrecomp() { return this.createForm.get('nombrecomp'); }
  get fecha() { return this.createForm.get('fecha'); }
  get giro() { return this.createForm.get('giro'); }
  get puesto() { return this.createForm.get('puesto'); }
  get experiencia() { return this.createForm.get('experiencia'); }
  get modalidad() { return this.createForm.get('modalidad'); }
  get sueldo() { return this.createForm.get('sueldo'); }

  get nombrecomp2() { return this.updateForm.get('nombrecomp'); }
  get fecha2() { return this.updateForm.get('fecha'); }
  get giro2() { return this.updateForm.get('giro'); }
  get puesto2() { return this.updateForm.get('puesto'); }
  get experiencia2() { return this.updateForm.get('experiencia'); }
  get modalidad2() { return this.updateForm.get('modalidad'); }
  get sueldo2() { return this.updateForm.get('sueldo'); }
  get id() { return this.updateForm.get('id'); }

  get filtrar() { return this.filterForm.get('filtrar'); }
  get puesto3() { return this.filterForm.get('puesto'); }
  get companiaBusqueda() { return this.filterForm.get('companiaBusqueda'); }

  title = 'pdf';
  private fileTmp:any;
  constructor(private abcService: AbcService,private vacantesservice:VacantesService,private router:Router,private restService: RestService,private toastr: ToastrService) { 
    /*this.abcService.consulta('http://localhost:3000/user').subscribe((res: any) => {
    console.log("Consulta general ....");
    console.log(res)
    this.array=res.array;});*/
    this.rol=localStorage.getItem("rol")
    if(this.rol){
      this.obtenerVacantes();
    }else{
      this.router.navigate(['/login']);
    }
  }

  verificar(){
    if(this.filtrar?.value==""){
      this.obtenerVacantes();
    }
  }
  obtenerVacantes(){
    this.vacantesservice.cargarVacantes().subscribe(res => {this.vacantes=res,console.log("se obtienen"),console.log(res)
  });
  }
  obtenerVacantesPuesto(){
    if(this.puesto3?.value && this.puesto3?.value!=''){
      this.vacantesservice.cargarVacantesPuesto(this.puesto3?.value).subscribe(res => {this.vacantes=res,console.log("se obtienen"),console.log(res)});
    }
  }

  obtenerVacantesCompania(){
    if(this.companiaBusqueda?.value && this.companiaBusqueda?.value!=''){
      this.vacantesservice.cargarVacantesCompania(this.companiaBusqueda?.value).subscribe(res => {this.vacantes=res,console.log("se obtienen"),console.log(res)});
    }
  }
  crearVacante(){
    if(this.createForm.valid){
    this.vacantesservice.crearVacantes(this.createForm.value).subscribe(res => {console.log(res),this.obtenerVacantes();
      this.toastr.success('Se creo correctamente','Exito!');
    });
    
  }else{
    this.toastr.error('No se creo, faltan datos','Error' );
  }
  }
  eliminarVacanteById(id:string){
    console.log(id);
    this.vacantesservice.eliminarVacantes(id).subscribe(res => {console.log(res), this.obtenerVacantes();
    const data:any=res;
    if(data.action)this.toastr.success('Se eliminó correctamente','Exito!');
    else this.toastr.error(`${data.error}`,'Error' );
    });
   
  }
  actualizaVacante(){
    if(this.updateForm.valid){
      this.vacantesservice.actualizarVacantes(this.updateForm.value).subscribe(res => {console.log(res),this.obtenerVacantes();
        const data:any=res;
        if(data.action)this.toastr.success('Se actualizó correctamente','Exito!');
        else this.toastr.error(`${data.error}`,'Error' );
      })
      
    }
  }

  seleccionarVacante(vacante:any){
    this.nombrecomp2?.setValue(vacante.nombrecomp)
    this.fecha2?.setValue(vacante.fecha)
    this.giro2?.setValue(vacante.giro)
    this.puesto2?.setValue(vacante.puesto)
    this.experiencia2?.setValue(vacante.experiencia)
    this.modalidad2?.setValue(vacante.modalida)
    this.sueldo2?.setValue(vacante.sueldo)
    this.id?.setValue(vacante.id)
    this.updateForm.setValue(vacante)
    this.vacante=vacante;
    //this.obtenerVacantes();
  }
  ngOnInit(): void {
    
    console.log(this.vacantes)
  }
  getFile($event: any): void {
    console.log($event)
    const [file] = $event.target.files;
    console.log(file)
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name,

    }
  }
  //envia el archivo Curriculum, al dar click
  sendFile(idvacnte:string):void{
    const body = new FormData();
    const id=localStorage.getItem("idUser");
    const nombre=localStorage.getItem("name");
    const apellido=localStorage.getItem("lastname");
    const contact=localStorage.getItem("contact");
    //                       archivo en crudo        nombre del archivo
    console.log(this.fileTmp.fileName);
    
    this.restService.countCurriulum().subscribe(res => {
      const data=res;
      
    const nombrearchivo=`vitae${nombre?.charAt(0)}${apellido?.charAt(0)}${contact?.charAt(0)}${data[0].count+1}.pdf`;
      body.append("myFile", this.fileTmp.fileRaw, nombrearchivo);
      this.restService.sendPost(body).subscribe(res => {
        console.log(res);
        const curriculum={nombreArchivo:nombrearchivo,id_user:id,id_vacante:idvacnte};
        this.restService.createCurriulum(curriculum).subscribe(res => {
          console.log(res);
          this.toastr.success('Se cargo correctamente','Exito!');
        })
      })
    })
    
  }

}

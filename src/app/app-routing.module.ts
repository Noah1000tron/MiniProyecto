import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './barra/inicio/inicio.component';
import { SomosComponent } from './barra/somos/somos.component';
import { ChatComponent } from './contacto/chat/chat.component';
import { CorreoComponent } from './correo/correo.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { LoginComponent } from './logges/login/login.component';
import { RegistroComponent } from './logges/registro/registro.component';
import { MostrarComponent } from './usuarios/mostrar/mostrar.component';
import { BasuraComponent } from './basura/basura.component';
import { CurriculumAdminComponent } from './curriculum-admin/curriculum-admin.component';
import {ArtistaComponent} from './artista/artista.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'somos', component: SomosComponent},
  {path: 'contacto', component: CorreoComponent},
  {path: 'pregunta', component: ChatComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'vacantes', component: MostrarComponent},
  {path: 'basura', component: BasuraComponent},
  {path: 'curriculum', component: CurriculumAdminComponent},
  {path: '**', redirectTo:"inicio"},
  {path: 'artist/:id', component: ArtistaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
